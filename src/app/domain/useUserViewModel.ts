"use client"
import { useUser, useUserActions } from '@/app/data/local/useUserStore'

const useUserViewModel = () => {
  const user = useUser()
  const action = useUserActions()
  return {
    user, action,
  }
}

export default useUserViewModel
