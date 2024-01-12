import React from 'react'
import Link from 'next/link'
import { Site } from '@/data/local/useSiteStore'

type SiteItemProps = {
  site: Site
}

function SiteItem({ site }: SiteItemProps) {
  return (
    <li>
      <Link href={'editor'}>{site.name}</Link>
    </li>)
}

export default SiteItem
