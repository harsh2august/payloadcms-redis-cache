import { createClient } from 'redis'

let client: ReturnType<
    typeof createClient
> | null = null

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
    {},
    {
        get(_, prop) {
            return async (...args: any[]) => {
                const redis =
                    await getClient()

                const method =
                    redis[
                    prop as keyof typeof redis
                    ]

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