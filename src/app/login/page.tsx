'use client'
import useUserViewModel from '@/app/domain/useUserViewModel'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const router = useRouter()
  const { action, user } = useUserViewModel()

  useEffect(() => {
    if (user !== null) {
      router.replace('/')
    }
  }, [user])

  return (
    <main className={'text-3xl font-bold underline'}>
      로그인
      <button onClick={() => action.set({ id: 0, name: 'test' })}>로그인</button>
    </main>
  )
}
