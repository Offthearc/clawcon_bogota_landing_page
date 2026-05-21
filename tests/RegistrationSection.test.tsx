import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RegistrationSection } from '../src/components/RegistrationSection/RegistrationSection'

describe('RegistrationSection', () => {
  it('renders the section with id="register"', () => {
    render(<RegistrationSection />)
    expect(document.getElementById('register')).toBeInTheDocument()
  })

  it('renders an accessible section landmark with a heading', () => {
    render(<RegistrationSection />)
    expect(
      screen.getByRole('region', { name: /join us at clawcon bogota 2026/i }),
    ).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<RegistrationSection />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /join us at clawcon bogota 2026/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders supporting copy', () => {
    render(<RegistrationSection />)
    expect(
      screen.getByText(/secure your spot at colombia's biggest/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/limited tickets available/i)).toBeInTheDocument()
  })

  it('renders the CTA button as a link with accessible text', () => {
    render(<RegistrationSection />)
    const link = screen.getByRole('link', { name: /get your tickets/i })
    expect(link).toBeInTheDocument()
  })

  it('CTA link points to a valid href', () => {
    render(<RegistrationSection />)
    const link = screen.getByRole('link', { name: /get your tickets/i })
    const href = link.getAttribute('href')
    expect(href).toBeTruthy()
    expect(href!.length).toBeGreaterThan(0)
  })

  it('CTA link is keyboard-navigable (has href)', () => {
    render(<RegistrationSection />)
    const link = screen.getByRole('link', { name: /get your tickets/i })
    expect(link).toHaveAttribute('href')
  })
})
