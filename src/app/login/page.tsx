'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useUserViewModel from '@/domain/useUserViewModel'

export default function Login() {
  const router = useRouter()
  const { action, user } = useUserViewModel()

  useEffect(() => {
    if (user !== null) {
      router.replace('/')
    }
  }, [user, router])

  return (
    <main className={'text-3xl font-bold underline'}>
      로그인
      <button onClick={() => action.set({ id: 0, name: 'test' })}>로그인</button>
    </main>
  )
}
