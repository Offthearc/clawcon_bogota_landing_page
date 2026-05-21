import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NavBar } from '../src/components/NavBar/NavBar'

describe('NavBar', () => {
  it('renders a nav landmark with aria-label="Main"', () => {
    render(<NavBar />)
    expect(
      screen.getByRole('navigation', { name: /main/i }),
    ).toBeInTheDocument()
  })

  it('renders the logo/brand name', () => {
    render(<NavBar />)
    expect(
      screen.getByRole('link', { name: /clawcon bogota/i }),
    ).toBeInTheDocument()
  })

  it('renders all section anchor links in the DOM', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation', { name: /main/i })
    const links = nav.querySelectorAll('a')
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'))
    expect(hrefs).toContain('#hero')
    expect(hrefs).toContain('#about')
    expect(hrefs).toContain('#schedule')
    expect(hrefs).toContain('#guests')
    expect(hrefs).toContain('#register')
    expect(hrefs).toContain('#footer')
  })

  it('renders a hamburger toggle button with accessible label', () => {
    render(<NavBar />)
    expect(
      screen.getByRole('button', { name: /toggle navigation menu/i }),
    ).toBeInTheDocument()
  })

  it('hamburger button has aria-expanded=false initially', () => {
    render(<NavBar />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('hamburger button toggles aria-expanded on click', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('pressing Escape closes the menu and returns focus to the toggle button', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()
  })

  it('clicking a nav link closes the menu', async () => {
    const user = userEvent.setup()
    render(<NavBar />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    const nav = screen.getByRole('navigation', { name: /main/i })
    const heroLink = nav.querySelector('a[href="#hero"]') as HTMLElement
    await user.click(heroLink)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('logo link is keyboard-focusable', () => {
    render(<NavBar />)
    const logo = screen.getByRole('link', { name: /clawcon bogota/i })
    logo.focus()
    expect(logo).toHaveFocus()
  })

  it('hamburger button has aria-controls referencing the nav element', () => {
    render(<NavBar />)
    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })
    expect(button).toHaveAttribute('aria-controls', 'navbar-menu')
    expect(document.getElementById('navbar-menu')).toBeInTheDocument()
  })
})
