import { whatsappLink } from '../config'

export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M9 10h6M9 13.5h4" />
    </svg>
  )
}

// Floating button, always visible in the bottom-right corner.
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <ChatIcon />
      <span>WhatsApp</span>
    </a>
  )
}