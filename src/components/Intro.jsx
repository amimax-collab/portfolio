import useReveal from '../hooks/useReveal'

export default function Intro() {
  const ref = useReveal()
  return (
    <section className="intro rise" ref={ref}>
      <p className="eyebrow">What I make</p>
      <h2>
        Systems and apps <em>where users experience fluidity</em> without friction.
      </h2>
    </section>
  )
}