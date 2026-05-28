import { redis } from './redis'
export async function cacheCollection({
    key,
    data,
    expiry = 3600,
}: {
    key: string
    data: any
    expiry?: number
}) {
    await redis.set(
        key,
        JSON.stringify(data),
        {
            EX: expiry,
        }
    )
}