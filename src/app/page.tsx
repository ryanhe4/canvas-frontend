'use client'

import Link from 'next/link'
import useUserViewModel from '@/app/domain/useUserViewModel'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const { user } = useUserViewModel()

  useEffect(() => {
    if (user === null) {
      router.replace('login')
    }
  }, [])

  return (
    <main className={'text-3xl font-bold underline'}>
      <p>site list</p>
      <ul>
        <li>
          <Link href={'canvas'}>site1</Link>
        </li>
        <li>site2</li>
        <li>site3</li>
        <li>site4</li>
      </ul>

      <button>create site</button>
    </main>
  )
}
