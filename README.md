# payloadcms-redis-cache

Redis cache utilities for Payload CMS and Next.js applications.

A lightweight Redis helper package built for modern Payload CMS v3 + Next.js App Router projects.

---

# Features

* ✅ Redis client for Payload CMS
* ✅ Next.js App Router support
* ✅ Payload collection caching
* ✅ Cache invalidation helpers
* ✅ TypeScript support
* ✅ ESM support
* ✅ Server-only safe
* ✅ Works with local Redis and VPS Redis
* ✅ Payload CMS v3 compatible

---

# Installation

```bash
npm install payloadcms-redis-cache
```

---

# Requirements

* Node.js 18+
* Redis Server
* Payload CMS v3+
* Next.js 14+

---

# Environment Variables

Create a `.env` file:

```env
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
```

Production Example:

```env
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=yourpassword
```

---

# Basic Usage

## Redis Client

```ts
import { redis } from 'payloadcms-redis-cache'

await redis.set('hello', 'world')

const value = await redis.get('hello')

console.log(value)
```

---

# Payload CMS Collection Caching

## Example API Route

```ts
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { redis } from 'payloadcms-redis-cache'

export async function GET() {
  const cached = await redis.get('hero-slider')

  if (cached) {
    return Response.json({
      docs: JSON.parse(cached),
    })
  }

  const payload = await getPayload({
    config: payloadConfig,
  })

  const data = await payload.find({
    collection: 'heroslider',
  })

  await redis.set(
    'hero-slider',
    JSON.stringify(data.docs),
    {
      EX: 3600,
    }
  )

  return Response.json(data)
}
```

---

# Cache Invalidation

## Payload Collection Hook

```ts
hooks: {
  afterChange: [
    async () => {
      await redis.del('hero-slider')
    },
  ],

  afterDelete: [
    async () => {
      await redis.del('hero-slider')
    },
  ],
}
```

---

# Next.js Client Component

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function HeroSlider() {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    const fetchSlides = async () => {
      const res = await fetch('/api/heroslider-api')

      const data = await res.json()

      setSlides(data.docs || [])
    }

    fetchSlides()
  }, [])

  return <div>{slides.length}</div>
}
```

---

# Important

Redis should only be used on the server.

Do NOT import Redis inside:

* Client Components
* Browser code
* useEffect Redis logic

Correct usage locations:

* API routes
* Payload hooks
* Server components
* Server actions

---

# Local Redis Setup (Mac)

Install Redis:

```bash
brew install redis
```

Start Redis:

```bash
brew services start redis
```

Verify:

```bash
redis-cli ping
```

Expected:

```bash
PONG
```

---

# VPS Redis Setup

Recommended production settings:

```conf
bind 127.0.0.1 ::1
protected-mode yes
```

Do not expose Redis publicly.

---

# Tech Stack

* Payload CMS
* Next.js
* Redis
* TypeScript
* tsup

---

# Roadmap

* [ ] cacheCollection helper
* [ ] invalidateCache helper
* [ ] cacheGlobal helper
* [ ] automatic Payload hooks
* [ ] tag-based invalidation
* [ ] Redis Insight integration examples
* [ ] BullMQ support

---

# License

MIT

---

# Author

[Harsh Kumar](https://www.linkedin.com/in/harsh2august/)

---

# Contributing

Pull requests and issues are welcome.

---

# Links

* Payload CMS: https://payloadcms.com
* Redis: https://redis.io
* Next.js: https://nextjs.org
