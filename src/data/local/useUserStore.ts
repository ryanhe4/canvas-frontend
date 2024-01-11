import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type UserType = {
  id: number,
  name: string
}

type UserState = {
  user: UserType | null,
  actions: {
    set: (user: UserType) => void;
    clear: () => void;
  }
}

const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    actions: {
      set: (user: UserType) => set((state) => ({ ...state, user })),
      clear: () => set((state) => (
        {
          ...state,
          user: null,
        }
      )),
    },
  })),
)

export const getUserState = useUserStore.getState()
export const useUserActions = () => useUserStore((store) => store.actions)
export const useUser = () => useUserStore((store) => store.user)
