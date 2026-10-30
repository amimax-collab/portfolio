const SKILLS = [
  'React',
  'JavaScript',
  'HTML',
  'Tailwind',
  'SQL',
  'Supabase',
  'CSS',
  'Docker',
  'Functional Apps',
  'Online payments',
  'Booking logic',
  'Responsive design',
  'Component design',
  'Responsive Apps',
  'Github'
]

export default function Marquee() {
  // The list is rendered twice so the loop has no gap.
  const items = [...SKILLS, ...SKILLS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  )
}