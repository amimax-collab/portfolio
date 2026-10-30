import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { whatsappLink } from '../config'
import { ChatIcon } from './WhatsAppButton'

export default function About() {
  const ref = useReveal()
  const [missing, setMissing] = useState(false)

  return (
    <section className="about rise" id="about" ref={ref}>
      <div className="photo">
        <div className="photo-frame">
          {missing ? (
            <div className="photo-empty">
              <span>A</span>
              <small>Add your picture at public/photo.jpg</small>
            </div>
          ) : (
            <img src="/photo.jpg" alt="Portrait of Fountain" onError={() => setMissing(true)} />
          )}
        </div>
        <span className="photo-tag">Frontend developer &middot; Nigeria</span>
      </div>

      <div className="about-copy">
        <p className="eyebrow">About me</p>
        <h2>Hi, I'm Fountain.</h2>
        <p>
          I build responsive websites and apps for businesses in Nigeria. I care about pages that
          load fast, look sharp on a phone and make a smooth experience for users.
        </p>
        <p>
          Check some of my projects below
        </p>
        <a className="btn" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <ChatIcon /> Message me on WhatsApp
        </a>
      </div>
    </section>
  )
}