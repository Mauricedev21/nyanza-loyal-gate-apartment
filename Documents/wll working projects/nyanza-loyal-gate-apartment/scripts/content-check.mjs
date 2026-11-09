import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })

const render = async (App, route) =>
  renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)))

const checks = []
const expect = (name, html, needle) => checks.push({ name, ok: html.includes(needle), needle })

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')

  const home = await render(App, '/')
  expect('footer credit', home, 'Powered by Maurice — All Rights Reserved © Copyright')
  expect('business phone', home, '0788 869 958')
  expect('developer phone', home, '0786931313')
  expect('business email', home, 'nyanzaroyalgateapartment@gmail.com')
  expect('whatsapp link', home, 'wa.me/250788869958')
  expect('instagram', home, 'instagram.com/nyanzaroyalgateapartment')
  expect('tagline', home, 'Taste, Class, Perfection.')
  expect('whatsapp fab', home, 'Chat with Nyanza Royal Gate Apartment on WhatsApp')

  const acc = await render(App, '/accommodation')
  expect('booking form submit', acc, 'Send Booking Request')
  expect('check-in field', acc, 'Check-in Date')
  expect('check-out field', acc, 'Check-out Date')

  const cat = await render(App, '/catering')
  expect('catering form submit', cat, 'Send Catering Request')
  expect('event type field', cat, 'Event Type')

  const ev = await render(App, '/events')
  expect('event form submit', ev, 'Send Event Inquiry')

  const contact = await render(App, '/contact')
  expect('contact form submit', contact, 'Send Message')
  expect('call link', contact, 'tel:+250788869958')
  expect('mail link', contact, 'mailto:nyanzaroyalgateapartment@gmail.com')

  const services = await render(App, '/services')
  const serviceCount = (services.match(/Inquire about this/g) || []).length
  checks.push({ name: '13 services', ok: serviceCount === 13, needle: `found ${serviceCount}` })

  const gallery = await render(App, '/gallery')
  expect('gallery filter conference', gallery, 'Conference Hall')
  expect('gallery filter wellness', gallery, 'Wellness')
  expect('lightbox label', gallery, 'Open Apartments image')
} finally {
  await vite.close()
}

let failed = 0
for (const c of checks) {
  if (!c.ok) failed++
  console.log(`${c.ok ? 'PASS' : 'FAIL'}  ${c.name}${c.ok ? '' : `  (missing: ${c.needle})`}`)
}
console.log(`\n${checks.length - failed}/${checks.length} checks passed`)
if (failed > 0) process.exit(1)
