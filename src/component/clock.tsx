'use client'

import { startTransition, useEffect, useState } from 'react'

export function Clock() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    startTransition(() => {
      setNow(Date.now())
    })

    const id = setInterval(() => {
      startTransition(() => {
        setNow(Date.now())
      })
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <time>
      {now !== null
        ? new Date(now).toLocaleTimeString('Bn-bn', {
            timeZone: 'Asia/Dhaka',
            weekday: "long",
            day: "numeric",
            month: "numeric",
            year : "2-digit",
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })
        : '…'}
    </time>
  )
}