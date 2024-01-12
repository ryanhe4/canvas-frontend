import { render } from '@testing-library/react'
import SiteContainer from '@/app/components/SiteContainer'

jest.mock('@/app/domain/useSiteViewModel', () => {
  return jest.fn(()=> [])
})

describe('<SiteContainer />', () => {
  it('renders a sites', () => {
    const { getByText } = render(<SiteContainer />)

    expect(getByText(/비어있습니다./))
  })
})
