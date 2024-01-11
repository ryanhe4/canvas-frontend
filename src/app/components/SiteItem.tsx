import React from 'react'
import { Site } from '@/app/components/SiteContainer'
import Link from 'next/link'

type SiteItemProps = {
  site: Site
}

function SiteItem({ site }: SiteItemProps) {
  return (
    <li>
      <Link href={'canvas'}>{site.name}</Link>
    </li>)
}

export default SiteItem
