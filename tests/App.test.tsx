import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('renders the navigation bar', () => {
    render(<App />)
    expect(
      screen.getByRole('navigation', { name: /main/i }),
    ).toBeInTheDocument()
  })

  it('renders a main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
