'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useUserViewModel from '@/domain/useUserViewModel'
import SiteContainer from '@/components/SiteContainer'

export default function Home() {
  const router = useRouter()
  const { user } = useUserViewModel()

  useEffect(() => {
    if (user === null) {
      router.replace('login')
    }
  }, [router, user])

  return (
    <main className={''}>
      <SiteContainer/>
    </main>
  )
}
