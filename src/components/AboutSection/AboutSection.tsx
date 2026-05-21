import './AboutSection.css'

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '500+', label: 'Expected Attendees' },
  { value: '2', label: 'Days' },
  { value: 'Corferias Bogotá', label: 'Venue' },
  { value: 'Est. 2026', label: 'Year' },
]

export function AboutSection() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <h2 id="about-heading" className="about__heading">
          About ClawCon Bogotá
        </h2>
        <p className="about__description">
          ClawCon Bogotá is Colombia&apos;s first major tabletop gaming
          convention, celebrating the vibrant culture of board games, card
          games, role-playing games, and miniature gaming. Held in the heart of
          Bogotá, it brings together players, designers, and enthusiasts from
          across Latin America for two unforgettable days of gaming, panels, and
          community.
        </p>
        <ul className="about__stats" aria-label="Event highlights">
          {STATS.map(({ value, label }) => (
            <li key={label} className="about__stat-card">
              <span className="about__stat-value">{value}</span>
              <span className="about__stat-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
