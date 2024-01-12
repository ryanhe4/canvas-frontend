import { render } from '@testing-library/react'
import React from 'react'
import SiteItem from '@/components/SiteItem'
import { Site } from '@/data/local/useSiteStore'

describe('<SiteItem />', () => {
  it('renders a empty list', () => {
    const siteItem: Site = { id:0, name: 'site1' }
    const { container, getByText } = render(<SiteItem site={siteItem} />)

    expect(container).toHaveTextContent(/site1/)

  })
})
