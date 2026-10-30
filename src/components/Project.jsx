import useReveal from '../hooks/useReveal'
import Stage from './Stage'

export default function Project({ title, lead, text, chips, ghost, href, children, status }) {
  const ref = useReveal()
  return (
    <article className="project" id='project'>
      <div className="copy rise" ref={ref}>
        <span className="status">{status}</span>
        <h3>{title}</h3>
        <p>
          <b>{lead}</b> {text}
        </p>
        <ul className="chips">
          {chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        {href && (
          <a className="btn project-link" href={href} target="_blank" rel="noopener noreferrer">
            See project <span className="arr">&rarr;</span>
          </a>
        )}
      </div>
      <Stage ghost={ghost}>{children}</Stage>
    </article>
  )
}