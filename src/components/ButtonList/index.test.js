import { render, screen } from '@testing-library/react'
import ButtonList from '.'

const createParts = () => {
  return [{
    id: 'a',
    name: 'part a'
  }, {
    id: 'b',
    name: 'part b'
  }, {
    id: 'c',
    name: 'part c'
  }, {
    id: 'd',
    name: 'part d'
  }]
}
test('ButtonList display correct text', () => {
  const parts = createParts()
  render(<ButtonList parts={parts} />)
  const name = screen.getByText(parts[0].name)
  expect(name).toBeInTheDocument()
})

test('ButtonList show logout button', () => {
  const parts = createParts()
  render(<ButtonList parts={parts} />)
  const name = screen.getByText('Logout')
  expect(name).toBeInTheDocument()
})

test('ButtonList show all buttons + logout', () => {
  const parts = createParts()
  render(<ButtonList parts={parts} />)
  const buttons = screen.getAllByRole('button')
  expect(buttons.length).toBe(parts.length + 1)
})
