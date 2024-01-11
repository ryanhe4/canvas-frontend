import { render } from '@testing-library/react'
import SiteContainer from '@/app/components/SiteContainer'

describe('<SiteContainer />', () => {
  const replace = jest.fn()

  it('renders a sites', () => {
    const { getByText } = render(<SiteContainer />)

    expect(getByText(/비어있습니다./))
  })
})
