import { Site, useSiteActions, useSites } from '@/app/data/local/useSiteStore'
import { useEffect } from 'react'

const useSiteViewModel = () => {
  // TODO: Change this fixture to server query data
  const siteList: Site[] = [
    { id: 0, name: 'site1' },
    { id: 1, name: 'site2' },
    { id: 2, name: 'site3' },
    { id: 3, name: 'site4' },
  ]

  const sites = useSites()
  const actions = useSiteActions()

  useEffect(() => {
    actions.updateSites(siteList)
  }, [])

  return sites
}

export default useSiteViewModel
