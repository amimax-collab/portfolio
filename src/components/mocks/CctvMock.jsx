import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../../utils/motion'

const CAMS = ['CAM 01 \u00B7 GATE', 'CAM 02 \u00B7 HALL', 'CAM 03 \u00B7 YARD', 'CAM 04 \u00B7 SHOP']

const pad = (n) => String(n).padStart(2, '0')
const clock = () => {
  const d = new Date()
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export default function CctvMock() {
  const [time, setTime] = useState(clock)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const a = setInterval(() => setTime(clock()), 1000)
    const b = setInterval(() => setOpen((o) => !o), 2600)
    return () => {
      clearInterval(a)
      clearInterval(b)
    }
  }, [])

  return (
    <>
      <div className="cams" role="img" aria-label="Animated mock of four security camera feeds">
        {CAMS.map((name, i) => (
          <div className="cam" key={name} style={{ '--i': i }}>
            <span className="lbl">{name}</span>
            <span className="rec">REC</span>
            {i === 0 && <span className="box"></span>}
            <span className="tc">{time}</span>
          </div>
        ))}
      </div>

      <div className={'lock' + (open ? ' open' : '')}>
        <span>Front door</span>
        <i>{open ? 'Unlocked' : 'Locked'}</i>
      </div>
    </>
  )
}