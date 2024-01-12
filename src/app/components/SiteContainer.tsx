import React from 'react'
import SiteList from '@/app/components/SiteList'
import useSiteViewModel from '@/app/domain/useSiteViewModel'

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
