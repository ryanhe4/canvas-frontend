import React from 'react'
import SiteList from '@/app/components/SiteList'

export type Site = {
  id: number
  name: string
}

const siteList: Site[] = [
  { id: 0, name: 'site1' },
  { id: 1, name: 'site2' },
  { id: 2, name: 'site3' },
  { id: 3, name: 'site4' },
]

function SiteContainer() {
  return (
    <div>
      <h1>site list</h1>
      <SiteList data={[]} />
      <button>create site</button>
    </div>
  )
}

export default SiteContainer
