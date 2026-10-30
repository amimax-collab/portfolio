import { useRef } from 'react'
import { prefersReducedMotion } from '../utils/motion'

export default function Stage({ ghost, children }) {
  const tiltRef = useRef(null)

  const onMove = (e) => {
    if (e.pointerType === 'touch' || prefersReducedMotion()) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    tiltRef.current.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`
  }

  const onLeave = () => {
    tiltRef.current.style.transform = ''
  }

  return (
    <div className="stage" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="ghost" aria-hidden="true">
        {ghost}
      </div>
      <div className="tilt" ref={tiltRef}>
        {children}
      </div>
    </div>
  )
}