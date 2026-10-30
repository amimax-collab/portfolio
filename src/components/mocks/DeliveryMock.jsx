import { useEffect, useState } from 'react'
import { naira, prefersReducedMotion } from '../../utils/motion'

const DISHES = [
  { id: 'd1', name: 'Jollof rice and chicken', price: 4500 },
  { id: 'd2', name: 'Suya platter', price: 3200 },
  { id: 'd3', name: 'Pepper soup', price: 2800 },
]

export default function DeliveryMock() {
  // step 0: empty, 1-3: dishes added one by one, 4: order placed
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStep(4)
      return
    }
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 1100)
    return () => clearInterval(id)
  }, [])

  const count = Math.min(step, 3)
  const placed = step === 4
  const total = DISHES.slice(0, count).reduce((sum, d) => sum + d.price, 0)

  let label = 'Cart is empty'
  if (placed) label = 'Order placed'
  else if (count) label = `${count} ${count === 1 ? 'item' : 'items'}`

  return (
    <div className="phone" role="img" aria-label="Animated mock of a food delivery app adding dishes to a cart">
      <div className="screen">
        <div className="s-head">
          <span>Eagle Square</span>
          <span className="badge" key={count}>{count}</span>
        </div>

        <div className="dishes">
          {DISHES.map((d, k) => {
            const on = k < count
            return (
              <div key={d.id} className={`dish ${d.id}${on ? ' on' : ''}`}>
                <div className="pic"></div>
                <div>
                  <b>{d.name}</b>
                  <small>{naira(d.price)}</small>
                </div>
                <button className="add" tabIndex={-1}>{on ? 'Added' : 'Add'}</button>
              </div>
            )
          })}
        </div>

        <div className={'cartbar' + (placed ? ' done' : '')}>
          <span>{label}</span>
          <span>{naira(total)}</span>
        </div>
      </div>
    </div>
  )
}