import { devtools } from 'zustand/middleware'
import { create } from 'zustand'

export type Site = {
  id: number
  name: string
}

type SiteState = {
  sites: Site[],
  actions: {
    updateSites: (request: Site[]) => void;
  }

}

const useSiteStore = create<SiteState>()(
  devtools((set) => ({
    sites: [],
    actions: {
      updateSites: (request: Site[]) => {
        set((state) => ({
          ...state,
          sites: request,
        }))
      },
    },
  })),
)

export const useSites = () => useSiteStore(state => state.sites)
export const useSiteActions = () => useSiteStore(state => state.actions)
