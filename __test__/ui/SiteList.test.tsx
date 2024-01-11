import { render } from '@testing-library/react'
import SiteList from '@/app/components/SiteList'
import { Site } from '@/app/components/SiteContainer'

describe('<SiteList />', () => {
  it('renders a empty list', () => {
    const { getByText } = render(<SiteList data={[]} />)

    expect(getByText(/비어있습니다./))
  })

  it('render with item', () => {
    const data: Site[] = [
      { id: 0, name: 'site1' },
      { id: 1, name: 'site2' },
      { id: 2, name: 'site3' },
      { id: 3, name: 'site4' },
    ]
    const { getByText } = render(<SiteList data={data} />)

    expect(getByText(/site1/))
    expect(getByText(/site2/))
  })
})
