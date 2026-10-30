import { useEffect, useState } from 'react'
import DotField from './DotField'
import { prefersReducedMotion } from '../utils/motion'

const NAME = 'Fountain'
const WORDS = ['React apps', 'backend systems', 'business websites', 'responsive websites', 'responsive apps']

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="hero gutter">
      <DotField />
      <div className="inner">
        <div className="nav">
          <a className="mark" href="#top">
            <i></i>Frontend developer
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#project">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <h1 className="name" id="top" aria-label={NAME}>
          {NAME.split('').map((ch, idx) => (
            <span
              key={idx}
              className={'ch' + (idx === NAME.length - 1 ? ' x' : '')}
              style={{ '--i': idx }}
              aria-hidden="true"
            >
              {ch}
            </span>
          ))}
        </h1>

        <p className="tagline">
          I build{' '}
          <span className="slot">
            <span key={WORDS[i]}>{WORDS[i]}</span>
          </span>{' '}
          for businesses.
        </p>

        <div className="hero-actions">
          <a className="btn sun" href="#work">
            See my work <span className="arr">&rarr;</span>
          </a>
          <a className="btn" href="#contact">
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}