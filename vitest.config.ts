/// <reference types="vitest/config" />

import {defineConfig} from 'vite'
import {pageScreenshot} from "./test/commands";

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      // https://playwright.dev
      providerOptions: {},
      commands: {
        pageScreenshot,
      },
    },
  },
})
