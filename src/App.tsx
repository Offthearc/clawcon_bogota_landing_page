import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { ScheduleSection } from './components/ScheduleSection/ScheduleSection'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
    </>
  )
}

export default App
