import React from 'react'
import { Site } from '@/app/components/SiteContainer'
import SiteItem from '@/app/components/SiteItem'

type SiteListProps = {
  data: Site[]
}

function SiteList({ data }: SiteListProps) {
  if (data.length === 0) {
    return <p>비어있습니다.</p>
  }
  return (
    <ul>
      {data.map((site) => <SiteItem key={site.id} site={site} />)}
    </ul>
  )
}

export default SiteList
