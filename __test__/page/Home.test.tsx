import { render } from '@testing-library/react'
import useUserViewModel from '@/domain/useUserViewModel'
import Home from '@/app/page'
import useSiteViewModel from '@/domain/useSiteViewModel'

const replace = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      replace: replace,
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}))

jest.mock('@/app/domain/useUserViewModel')
jest.mock('@/app/domain/useSiteViewModel', () => {return jest.fn(()=> [])})

describe('<Home />', () => {
  (useUserViewModel as jest.Mock).mockImplementation(() => ({
    user: 1234,
  }))

  it('renders a heading', () => {
    const { container } = render(<Home />)

    expect(container).toHaveTextContent('site list')
    expect(replace).not.toBeCalled()
  })

  it('render a empty list', () => {
    const { getByText } = render(<Home />)

    expect(getByText(/비어있습니다./))
  })
})
