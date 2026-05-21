import './HeroSection.css'

export function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero__inner">
        <h1 className="hero__title">ClawCon Bogota</h1>
        <p className="hero__tagline">
          Colombia&apos;s Premier Tabletop Gaming Convention
        </p>
        <dl className="hero__meta">
          <div className="hero__meta-item">
            <dt className="hero__meta-label">Date</dt>
            <dd className="hero__meta-value">August 16&ndash;17, 2026</dd>
          </div>
          <div className="hero__meta-item">
            <dt className="hero__meta-label">Location</dt>
            <dd className="hero__meta-value">Bogot&aacute;, Colombia</dd>
          </div>
        </dl>
        <a href="#register" className="hero__cta">
          Register Now
        </a>
      </div>
    </section>
  )
}

export default HeroSection
