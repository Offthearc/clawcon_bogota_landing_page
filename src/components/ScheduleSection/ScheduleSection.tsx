import './ScheduleSection.css'

interface ScheduleItem {
  title: string
  day: string
  time: string
  description: string
}

const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    title: 'Open Gaming Hall',
    day: 'Day 1 & 2',
    time: '10:00–20:00',
    description:
      'Drop-in board games and RPG sessions for all skill levels. Bring your favourites or try something new from our library.',
  },
  {
    title: 'Competitive Tournaments',
    day: 'Day 1',
    time: '11:00–18:00',
    description:
      'Magic: The Gathering, Warhammer 40k, and more. Register at the door and compete for prizes.',
  },
  {
    title: 'Game Design Panels',
    day: 'Day 2',
    time: '13:00–17:00',
    description:
      'Meet designers and learn about the industry. Q&A sessions after each panel.',
  },
  {
    title: 'Cosplay Contest',
    day: 'Day 2',
    time: '16:00–18:00',
    description:
      'Show off your best gaming-themed costume. Prizes for Best in Show, Best Craft, and Fan Favourite.',
  },
]

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="schedule"
      aria-labelledby="schedule-heading"
    >
      <div className="schedule__inner">
        <h2 id="schedule-heading" className="schedule__heading">
          Schedule &amp; Activities
        </h2>
        <ul className="schedule__grid" aria-label="Event schedule">
          {SCHEDULE_ITEMS.map(({ title, day, time, description }) => (
            <li key={title} className="schedule__card">
              <h3 className="schedule__card-title">{title}</h3>
              <p className="schedule__card-meta">
                <span className="schedule__card-day">{day}</span>
                <span className="schedule__card-sep" aria-hidden="true">
                  {' '}
                  ·{' '}
                </span>
                <span className="schedule__card-time">{time}</span>
              </p>
              <p className="schedule__card-description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ScheduleSection
