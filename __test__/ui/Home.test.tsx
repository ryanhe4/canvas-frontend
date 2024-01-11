import { render } from '@testing-library/react'
import useUserViewModel from '@/app/domain/useUserViewModel'
import Home from '@/app/page'

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
jest.mock('../../src/app/domain/useUserViewModel')

describe('<Home />', () => {
  (useUserViewModel as jest.Mock).mockImplementation(() => ({
    user: 1234,
  }))

  it('renders a heading', () => {
    const { container } = render(<Home />)

    expect(container).toHaveTextContent('site list')
    expect(replace).not.toBeCalled()
  })


  it('render a list', () => {


    const { getByText } = render(<Home />)

    expect(getByText(/비어있습니다./))
  })
})
