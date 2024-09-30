import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { beforeEach, expect } from 'vitest'
import { toMatchImageSnapshot } from "jest-image-snapshot";

beforeEach(() => {
  cleanup()
})

expect.extend({ toMatchImageSnapshot });