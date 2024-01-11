'use client'

import Link from 'next/link'
import useUserViewModel from '@/app/domain/useUserViewModel'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import SiteContainer from '@/app/components/SiteContainer'

export default function Home() {
  const router = useRouter()
  const { user } = useUserViewModel()

  useEffect(() => {
    if (user === null) {
      router.replace('login')
    }
  }, [])

  return (
    <main className={''}>
      <SiteContainer/>
    </main>
  )
}
