import React from 'react'
import useSiteViewModel from '@/domain/useSiteViewModel'
import SiteList from '@/components/SiteList'

function SiteContainer() {
  const sites = useSiteViewModel();

  return (
    <div>
      <h1>site list</h1>
      <SiteList data={sites} />
      <button>create site</button>
    </div>
  )
}

export default SiteContainer
