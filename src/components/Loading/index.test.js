import { render, screen } from '@testing-library/react'
import Loading from './'

test('Loading', () => {
  render(<Loading />)
  const element = screen.getByText(/Loading/i)
  expect(element).toBeInTheDocument()
})
