import { render, screen } from '@testing-library/react'
import Control from '.'

const createControl = () => {
  return {
    id: 1,
    name: 'Control Test 1',
    value: 10.123,
    nominal: 10,
    dev1: 2,
    dev2: 4,
    lasts: '[10.123]',
    quality: 'PERFECT'
  }
}
test('Control load', () => {
  const control = createControl()
  render(<Control {...control} />)
  const name = screen.getByText(control.name)
  expect(name).toBeInTheDocument()

  const quality = screen.getByAltText(control.quality)
  expect(quality).toBeInTheDocument()
})
