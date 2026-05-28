import 'server-only'

import { createClient } from 'redis'

export const redis = createClient({
    socket: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: Number(process.env.REDIS_PORT || 6379),
    },

    ...(process.env.REDIS_PASSWORD
        ? {
            password: process.env.REDIS_PASSWORD,
        }
        : {}),
})

redis.connect()

export default redis