import { render } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import useUserViewModel from '@/app/domain/useUserViewModel'
import Home from '@/app/page'

jest.mock('next/navigation')
jest.mock('../src/app/domain/useUserViewModel')

describe('<Home />', () => {
  const replace = jest.fn()

  useRouter.mockImplementation(() => ({
    replace: replace,
  }))
  useUserViewModel.mockImplementation(() => ({
    user: 1234,
  }))

  it('renders a heading', () => {
    const { container } = render(<Home />)

    expect(container).toHaveTextContent('site list')
    expect(replace).not.toBeCalled()
  })


  it('render a list', () => {
    const { container } = render(<Home />)

    expect(container).toHaveTextContent('site1')
    expect(container).toHaveTextContent('site2')
  })
})
