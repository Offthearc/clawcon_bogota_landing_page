import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ScheduleSection } from '../src/components/ScheduleSection/ScheduleSection'

describe('ScheduleSection', () => {
  it('renders the section with id="schedule"', () => {
    render(<ScheduleSection />)
    expect(document.getElementById('schedule')).toBeInTheDocument()
  })

  it('renders an accessible section landmark with a heading', () => {
    render(<ScheduleSection />)
    expect(
      screen.getByRole('region', { name: /schedule.*activities/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /schedule.*activities/i }),
    ).toBeInTheDocument()
  })

  it('renders at least 4 schedule items in an accessible list', () => {
    render(<ScheduleSection />)
    const list = screen.getByRole('list', { name: /event schedule/i })
    expect(list).toBeInTheDocument()
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(4)
  })

  it('renders Open Gaming Hall with title, day, time, and description', () => {
    render(<ScheduleSection />)
    expect(
      screen.getByRole('heading', { name: /open gaming hall/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/day 1 & 2/i)).toBeInTheDocument()
    expect(screen.getByText(/10:00/)).toBeInTheDocument()
    expect(screen.getByText(/drop-in board games/i)).toBeInTheDocument()
  })

  it('renders Competitive Tournaments with title, day, time, and description', () => {
    render(<ScheduleSection />)
    expect(
      screen.getByRole('heading', { name: /competitive tournaments/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/11:00/)).toBeInTheDocument()
    expect(screen.getByText(/magic.*gathering/i)).toBeInTheDocument()
  })

  it('renders Game Design Panels with title, day, time, and description', () => {
    render(<ScheduleSection />)
    expect(
      screen.getByRole('heading', { name: /game design panels/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/13:00/)).toBeInTheDocument()
    expect(screen.getByText(/meet designers/i)).toBeInTheDocument()
  })

  it('renders Cosplay Contest with title, day, time, and description', () => {
    render(<ScheduleSection />)
    expect(
      screen.getByRole('heading', { name: /cosplay contest/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/16:00/)).toBeInTheDocument()
    expect(screen.getByText(/gaming-themed costume/i)).toBeInTheDocument()
  })
})
