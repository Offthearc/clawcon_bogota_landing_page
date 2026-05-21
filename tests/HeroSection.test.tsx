import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSection } from '../src/components/HeroSection/HeroSection'

describe('HeroSection', () => {
  it('renders the event name as the main heading', () => {
    render(<HeroSection />)
    expect(
      screen.getByRole('heading', { level: 1, name: /clawcon bogota/i }),
    ).toBeInTheDocument()
  })

  it('shows the tagline', () => {
    render(<HeroSection />)
    expect(
      screen.getByText(/colombia.*premier tabletop gaming convention/i),
    ).toBeInTheDocument()
  })

  it('shows the event date', () => {
    render(<HeroSection />)
    expect(screen.getByText(/august 16/i)).toBeInTheDocument()
    expect(screen.getByText(/2026/i)).toBeInTheDocument()
  })

  it('shows the event location', () => {
    render(<HeroSection />)
    expect(screen.getByText(/bogot.*colombia/i)).toBeInTheDocument()
  })

  it('renders the Register Now CTA as a link to #register', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /register now/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#register')
  })

  it('CTA is keyboard-focusable', () => {
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /register now/i })
    cta.focus()
    expect(cta).toHaveFocus()
  })

  it('CTA is keyboard-navigable via Tab', async () => {
    const user = userEvent.setup()
    render(<HeroSection />)
    const cta = screen.getByRole('link', { name: /register now/i })
    await user.tab()
    expect(cta).toHaveFocus()
  })

  it('renders the hero section with id="hero"', () => {
    render(<HeroSection />)
    const section = document.getElementById('hero')
    expect(section).toBeInTheDocument()
  })

  it('has a region landmark with accessible label', () => {
    render(<HeroSection />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })
})
