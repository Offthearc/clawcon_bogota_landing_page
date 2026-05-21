import './GuestsSection.css'

interface Guest {
  name: string
  role: string
  initials: string
}

const GUESTS: Guest[] = [
  {
    name: 'María García',
    role: 'Game Designer, Juegos Bogotá',
    initials: 'MG',
  },
  {
    name: 'Carlos Restrepo',
    role: 'RPG Master & Dungeon Designer',
    initials: 'CR',
  },
  {
    name: 'Ana Martínez',
    role: 'Warhammer 40k Regional Champion',
    initials: 'AM',
  },
  {
    name: 'Luisa Torres',
    role: 'Board Game Critic & Reviewer',
    initials: 'LT',
  },
]

export function GuestsSection() {
  return (
    <section id="guests" className="guests" aria-labelledby="guests-heading">
      <div className="guests__inner">
        <h2 id="guests-heading" className="guests__heading">
          Featured Guests
        </h2>
        <ul className="guests__grid" aria-label="Featured guests">
          {GUESTS.map(({ name, role, initials }) => (
            <li key={name} className="guests__card">
              <div
                className="guests__avatar"
                role="img"
                aria-label={`Avatar for ${name}`}
              >
                <span className="guests__avatar-initials" aria-hidden="true">
                  {initials}
                </span>
              </div>
              <h3 className="guests__card-name">{name}</h3>
              <p className="guests__card-role">{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default GuestsSection
