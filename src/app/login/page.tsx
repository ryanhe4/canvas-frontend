'use client'
import useUserViewModel from '@/domain/useUserViewModel'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const { action, user } = useUserViewModel()

  if (user !== null) {
    router.replace('/')
  }

  return (
    <main className={'text-3xl font-bold underline'}>
      로그인
      <button onClick={() => action.set({ id: 0, name: 'test' })}>로그인</button>
    </main>
  )
}
