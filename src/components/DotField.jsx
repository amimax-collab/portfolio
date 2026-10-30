import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../utils/motion'

export default function DotField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')
    const hero = cv.parentElement
    const reduce = prefersReducedMotion()

    let W = 0
    let H = 0
    let mx = -999
    let my = -999
    let pointer = false
    let raf = 0
    const t0 = performance.now()

    const size = () => {
      const r = hero.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width
      H = r.height
      cv.width = W * dpr
      cv.height = H * dpr
      cx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const frame = (now) => {
      const t = now - t0
      const S = 30
      cx.clearRect(0, 0, W, H)

      const ax = W * (0.5 + 0.38 * Math.cos(t * 0.0006))
      const ay = H * (0.5 + 0.34 * Math.sin(t * 0.0009))
      const sources = pointer ? [[mx, my, 170], [ax, ay, 120]] : [[ax, ay, 120]]

      for (let gy = S / 2; gy < H; gy += S) {
        for (let gx = S / 2; gx < W; gx += S) {
          let best = 0
          let ox = 0
          let oy = 0
          for (const [sx, sy, reach] of sources) {
            const dx = gx - sx
            const dy = gy - sy
            const d = Math.sqrt(dx * dx + dy * dy) || 1
            const p = Math.max(0, 1 - d / reach)
            if (p > best) {
              best = p
              ox = (dx / d) * p * 20
              oy = (dy / d) * p * 20
            }
          }
          const wave = (Math.sin(t * 0.0016 + gx * 0.012 + gy * 0.01) + 1) * 0.5
          const r = 1.1 + wave * 0.9 + best * 3.2
          cx.beginPath()
          cx.arc(gx + ox, gy + oy, r, 0, Math.PI * 2)
          cx.fillStyle =
            best > 0.04
              ? `rgba(201,164,92,${0.35 + best * 0.65})`
              : `rgba(243,239,230,${0.14 + wave * 0.2})`
          cx.fill()
        }
      }
      if (!reduce) raf = requestAnimationFrame(frame)
    }

    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
      pointer = true
    }
    const onLeave = () => {
      pointer = false
    }
    const onResize = () => {
      size()
      if (reduce) frame(performance.now())
    }

    size()
    raf = requestAnimationFrame(frame)
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="field" aria-hidden="true" />
}