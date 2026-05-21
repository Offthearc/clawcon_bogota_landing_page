import './App.css'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section id="hero" aria-labelledby="hero-heading">
          <h2 id="hero-heading">Hero</h2>
        </section>
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
        </section>
        <section id="schedule" aria-labelledby="schedule-heading">
          <h2 id="schedule-heading">Schedule</h2>
        </section>
        <section id="guests" aria-labelledby="guests-heading">
          <h2 id="guests-heading">Guests</h2>
        </section>
        <section id="register" aria-labelledby="register-heading">
          <h2 id="register-heading">Register</h2>
        </section>
      </main>
    </>
  )
}

export default App
