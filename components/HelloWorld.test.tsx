import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

test('renders name', async () => {
  render(<HelloWorld name="Vitest" />)

  expect(screen.getByText('Hello Vitest!')).toBeInTheDocument()
})
