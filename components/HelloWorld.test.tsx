import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { commands } from "@vitest/browser/context";
import HelloWorld from './HelloWorld'

test('renders name', async () => {
  render(<HelloWorld name="Vitest" />)

  expect(screen.getByText('Hello Vitest!')).toBeInTheDocument()
})

test('visual regression', async () => {
  render(<HelloWorld name="Vitest" />)
  const screenshot = await commands.pageScreenshot();

  expect(screenshot).toMatchImageSnapshot();
})
