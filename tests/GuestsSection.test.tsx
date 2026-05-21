import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GuestsSection } from '../src/components/GuestsSection/GuestsSection'

describe('GuestsSection', () => {
  it('renders the section with id="guests"', () => {
    render(<GuestsSection />)
    expect(document.getElementById('guests')).toBeInTheDocument()
  })

  it('renders an accessible section landmark with a heading', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('region', { name: /featured guests/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /featured guests/i }),
    ).toBeInTheDocument()
  })

  it('renders at least 3 guest cards in an accessible list', () => {
    render(<GuestsSection />)
    const list = screen.getByRole('list', { name: /featured guests/i })
    expect(list).toBeInTheDocument()
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(3)
  })

  it('each card has a name heading and role description', () => {
    render(<GuestsSection />)
    const nameHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(nameHeadings.length).toBeGreaterThanOrEqual(3)
    expect(
      screen.getByText(/game designer, juegos bogotá/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/rpg master/i)).toBeInTheDocument()
    expect(screen.getByText(/warhammer 40k/i)).toBeInTheDocument()
  })

  it('renders María García card with name and role', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('heading', { name: /maría garcía/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/game designer, juegos bogotá/i),
    ).toBeInTheDocument()
  })

  it('renders Carlos Restrepo card with name and role', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('heading', { name: /carlos restrepo/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/rpg master & dungeon designer/i),
    ).toBeInTheDocument()
  })

  it('renders Ana Martínez card with name and role', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('heading', { name: /ana martínez/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/warhammer 40k regional champion/i),
    ).toBeInTheDocument()
  })

  it('renders Luisa Torres card with name and role', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('heading', { name: /luisa torres/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/board game critic & reviewer/i),
    ).toBeInTheDocument()
  })

  it('each guest avatar has descriptive alt text via aria-label', () => {
    render(<GuestsSection />)
    expect(
      screen.getByRole('img', { name: /avatar for maría garcía/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /avatar for carlos restrepo/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /avatar for ana martínez/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /avatar for luisa torres/i }),
    ).toBeInTheDocument()
  })
})
