import { useEffect, useState } from 'react'
import { naira, prefersReducedMotion } from '../../utils/motion'

const START = 9 // check-in day
const OFFSET = 3 // blank cells before the 1st (month starts on a Thursday)
const NIGHT_PRICE = 35000

export default function BookingMock() {
  const [p, setP] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setP(6)
      return
    }
    const id = setInterval(() => setP((n) => (n + 1) % 9), 480)
    return () => clearInterval(id)
  }, [])

  const nights = Math.min(p, 5)
  const end = START + nights
  const booked = p >= 6

  let summary = 'Pick dates'
  if (nights) {
    summary = `${nights} ${nights === 1 ? 'night' : 'nights'} \u00B7 ${naira(nights * NIGHT_PRICE)}`
  }

  const dayClass = (day) => {
    if (day === START || (nights > 0 && day === end)) return 'd edge'
    if (day > START && day < end) return 'd mid'
    return 'd'
  }

  return (
    <>
      <div className="card" role="img" aria-label="Animated mock of a booking calendar selecting dates">
        <h4>Pick your dates</h4>
        <div className="sub">
          {booked ? 'Booking confirmed' : 'Select check-in and check-out'}
        </div>

        <div className="cal">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((l, i) => (
            <div key={i} className="dw">{l}</div>
          ))}
          {Array.from({ length: OFFSET }, (_, i) => (
            <div key={'b' + i}></div>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i + 1} className={dayClass(i + 1)}>{i + 1}</div>
          ))}
        </div>

        <div className="bookrow">
          <span>{summary}</span>
          <button className={'bookbtn' + (booked ? ' ok' : '')} tabIndex={-1}>
            {booked ? 'Booked' : 'Book now'}
          </button>
        </div>
      </div>

      <div className="map" aria-hidden="true">
        <div className="pin"></div>
        <small>Property location</small>
      </div>
    </>
  )
}