import { createClient } from 'redis'

type RedisClient = ReturnType<
    typeof createClient
>

let client: RedisClient | null = null

const getClient = async () => {
    if (!client) {
        client = createClient({
            socket: {
                host:
                    process.env.REDIS_HOST ||
                    '127.0.0.1',

                port: Number(
                    process.env.REDIS_PORT || 6379
                ),
            },

            ...(process.env.REDIS_PASSWORD
                ? {
                    password:
                        process.env.REDIS_PASSWORD,
                }
                : {}),
        })

        client.on('error', (err) => {
            console.error(
                'Redis Error:',
                err
            )
        })

        if (!client.isOpen) {
            await client.connect()
        }
    }

    return client
}

export const redis = new Proxy(
    {} as RedisClient,
    {
        get(_, prop: keyof RedisClient) {
            return async (...args: any[]) => {
                const redis =
                    await getClient()

                const method = redis[prop]

                if (
                    typeof method === 'function'
                ) {
                    return (
                        method as any
                    ).apply(redis, args)
                }

                return method
            }
        },
    }
)

export default redis