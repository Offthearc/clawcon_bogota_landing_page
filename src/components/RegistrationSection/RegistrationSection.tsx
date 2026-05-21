import './RegistrationSection.css'

export function RegistrationSection() {
  return (
    <section
      id="register"
      className="registration"
      aria-labelledby="registration-heading"
    >
      <div className="registration__inner">
        <h2 id="registration-heading" className="registration__heading">
          Join Us at ClawCon Bogota 2026
        </h2>
        <p className="registration__copy">
          Secure your spot at Colombia's biggest tabletop gaming convention.
          Limited tickets available — don't miss out!
        </p>
        <a
          href="https://example.com/register"
          className="registration__cta"
          aria-label="Get your tickets for ClawCon Bogota 2026"
        >
          Get Your Tickets
        </a>
      </div>
    </section>
  )
}

export default RegistrationSection
