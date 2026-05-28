// src/redis.ts
import { createClient } from "redis";
var client = null;
var getClient = async () => {
  if (!client) {
    client = createClient({
      socket: {
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: Number(
          process.env.REDIS_PORT || 6379
        )
      },
      ...process.env.REDIS_PASSWORD ? {
        password: process.env.REDIS_PASSWORD
      } : {}
    });
    client.on("error", (err) => {
      console.error(
        "Redis Error:",
        err
      );
    });
    if (!client.isOpen) {
      await client.connect();
    }
  }
  return client;
};
var redis = new Proxy(
  {},
  {
    get(_, prop) {
      return async (...args) => {
        const redis2 = await getClient();
        const method = redis2[prop];
        if (typeof method === "function") {
          return method.apply(redis2, args);
        }
        return method;
      };
    }
  }
);
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
