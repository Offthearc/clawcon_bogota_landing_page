import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from '../src/components/AboutSection/AboutSection'

describe('AboutSection', () => {
  it('renders a descriptive paragraph about the event', () => {
    render(<AboutSection />)
    expect(
      screen.getByText(/colombia.*first major tabletop gaming convention/i),
    ).toBeInTheDocument()
  })

  it('displays the expected attendees stat', () => {
    render(<AboutSection />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText(/expected attendees/i)).toBeInTheDocument()
  })

  it('displays the event duration stat', () => {
    render(<AboutSection />)
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
  })

  it('displays the venue stat', () => {
    render(<AboutSection />)
    expect(screen.getByText(/corferias bogotá/i)).toBeInTheDocument()
    expect(screen.getByText(/venue/i)).toBeInTheDocument()
  })

  it('displays the year stat', () => {
    render(<AboutSection />)
    expect(screen.getByText(/est\. 2026/i)).toBeInTheDocument()
    expect(screen.getByText(/year/i)).toBeInTheDocument()
  })

  it('renders with accessible section landmark and heading', () => {
    render(<AboutSection />)
    expect(
      screen.getByRole('region', { name: /about clawcon bogotá/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /about clawcon bogotá/i }),
    ).toBeInTheDocument()
  })

  it('renders section with id="about"', () => {
    render(<AboutSection />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })

  it('renders stats in a list with accessible label', () => {
    render(<AboutSection />)
    expect(
      screen.getByRole('list', { name: /event highlights/i }),
    ).toBeInTheDocument()
  })
})
