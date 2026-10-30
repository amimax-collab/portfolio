import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

import './components/Hero.css'
import './components/Marquee.css'
import './components/About.css'
import './components/Project.css'
import './components/Contact.css'
import './components/WhatsAppButton.css'
import './components/mocks/Mocks.css'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Marquee />
      <main className="gutter" id="work">
        <div className="inner">
          <About />
          <Intro />
          <Projects />
        </div>
      </main>
      <Contact />
      <WhatsAppButton />
    </>
  )
}