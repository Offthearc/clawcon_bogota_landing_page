import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { ScheduleSection } from './components/ScheduleSection/ScheduleSection'
import { GuestsSection } from './components/GuestsSection/GuestsSection'
import { RegistrationSection } from './components/RegistrationSection/RegistrationSection'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <GuestsSection />
      <RegistrationSection />
      <Footer />
    </>
  )
}

export default App
