import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../src/components/Footer/Footer'

describe('Footer', () => {
  it('renders a footer landmark element with id="footer"', () => {
    render(<Footer />)
    const footer = document.getElementById('footer')
    expect(footer).toBeInTheDocument()
    expect(footer?.tagName.toLowerCase()).toBe('footer')
  })

  it('displays the event name ClawCon Bogota', () => {
    render(<Footer />)
    expect(screen.getByText('ClawCon Bogota')).toBeInTheDocument()
  })

  it('displays the copyright notice', () => {
    render(<Footer />)
    expect(
      screen.getByText(/© 2026 ClawCon Bogota\. All rights reserved\./i),
    ).toBeInTheDocument()
  })

  it('contains an Instagram social link with accessible label', () => {
    render(<Footer />)
    const link = screen.getByRole('link', {
      name: /clawcon bogota on instagram/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('contains a Twitter / X social link with accessible label', () => {
    render(<Footer />)
    const link = screen.getByRole('link', {
      name: /clawcon bogota on twitter \/ x/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('contains a Facebook social link with accessible label', () => {
    render(<Footer />)
    const link = screen.getByRole('link', {
      name: /clawcon bogota on facebook/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('contains a contact email link pointing to mailto', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', {
      name: 'info@clawconbogota.com',
    })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:info@clawconbogota.com')
  })

  it('social nav has an accessible label', () => {
    render(<Footer />)
    expect(
      screen.getByRole('navigation', { name: /social media links/i }),
    ).toBeInTheDocument()
  })
})
