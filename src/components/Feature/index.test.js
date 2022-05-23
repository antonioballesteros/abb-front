import { render, screen } from '@testing-library/react'
import Feature from '.'

const createFeature = () => {
  return {
    id: 1,
    name: 'Feature Test 1',
    quality: 'GOOD',
    controls: []
  }
}
test('Feature load', () => {
  const feature = createFeature()
  render(<Feature feature={feature} />)
  const name = screen.getByText(feature.name)
  expect(name).toBeInTheDocument()

  const quality = screen.getByAltText(feature.quality)
  expect(quality).toBeInTheDocument()
})
