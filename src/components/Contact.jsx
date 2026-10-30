import { useState } from 'react'
import { whatsappLink } from '../config'
import { ChatIcon } from './WhatsAppButton'

const EMAIL = 'fountain@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard blocked: the address is still shown and selectable below.
    }
  }

  return (
    <>
      <section className="contact gutter" id="contact">
        <div className="inner">
          <p className="eyebrow">Contact</p>
          <h2>
            Got a business that needs <em>a website</em>?
          </h2>
          <p className="lead">Tell me what you want, and I will build it.</p>

          <div className="copyrow">
            <a className="btn sun" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <ChatIcon /> Chat on WhatsApp
            </a>
            <button className="btn" type="button" onClick={copy}>
              {copied ? 'Copied' : 'Copy email'} <span className="arr">&rarr;</span>
            </button>
            <code>{EMAIL}</code>
          </div>
        </div>
      </section>

      <footer className="gutter">
        <div className="inner foot">
          <span>Amimax &middot; Frontend developer</span>
          <span>Nigeria</span>
        </div>
      </footer>
    </>
  )
}