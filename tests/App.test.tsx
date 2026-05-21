import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('renders the NavBar', () => {
    render(<App />)
    expect(
      screen.getByRole('navigation', { name: /main/i }),
    ).toBeInTheDocument()
  })

  it('renders the HeroSection', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /clawcon bogota/i }),
    ).toBeInTheDocument()
  })
})
