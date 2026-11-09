import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

const routes = [
  '/',
  '/about',
  '/accommodation',
  '/services',
  '/catering',
  '/events',
  '/gallery',
  '/contact',
  '/does-not-exist',
]

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

let failures = 0
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  for (const route of routes) {
    try {
      const html = renderToString(
        React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)),
      )
      console.log(`RENDER ${route} -> OK (${html.length} chars)`)
    } catch (error) {
      failures++
      console.log(`RENDER ${route} -> FAIL: ${error?.message ?? error}`)
      if (error?.stack) console.log(error.stack)
    }
  }
} finally {
  await vite.close()
}

if (failures > 0) {
  console.log(`\n${failures} route(s) failed to render`)
  process.exit(1)
}
console.log('\nAll routes rendered without runtime errors')
