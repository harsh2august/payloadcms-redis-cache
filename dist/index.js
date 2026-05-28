// src/redis.ts
import "server-only";
import { createClient } from "redis";
var redis = createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT || 6379)
  },
  ...process.env.REDIS_PASSWORD ? {
    password: process.env.REDIS_PASSWORD
  } : {}
});
redis.connect();
var redis_default = redis;

// src/cacheCollection.ts
async function cacheCollection({
  key,
  data,
  expiry = 3600
}) {
  await redis_default.set(
    key,
    JSON.stringify(data),
    {
      EX: expiry
    }
  );
}
export {
  cacheCollection,
  redis
};
