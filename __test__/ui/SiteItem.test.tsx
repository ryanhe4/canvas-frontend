import { render } from '@testing-library/react'
import React from 'react'
import { Site } from '@/app/components/SiteContainer'
import SiteItem from '@/app/components/SiteItem'

describe('<SiteItem />', () => {
  it('renders a empty list', () => {
    const siteItem: Site = { name: 'site1' }
    const { container, getByText } = render(<SiteItem site={siteItem} />)

    expect(container).toHaveTextContent(/site1/)

  })
})
