import './Footer.css'

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__event-name">ClawCon Bogota</span>
        </div>

        <nav aria-label="Social media links" className="footer__social">
          <a
            href="#"
            className="footer__social-link"
            aria-label="ClawCon Bogota on Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="footer__social-link"
            aria-label="ClawCon Bogota on Twitter / X"
          >
            Twitter / X
          </a>
          <a
            href="#"
            className="footer__social-link"
            aria-label="ClawCon Bogota on Facebook"
          >
            Facebook
          </a>
        </nav>

        <div className="footer__contact">
          <a href="mailto:info@clawconbogota.com" className="footer__email">
            info@clawconbogota.com
          </a>
        </div>

        <p className="footer__copyright">
          &copy; 2026 ClawCon Bogota. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
