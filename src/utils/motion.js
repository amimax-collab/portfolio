export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const naira = (n) => '\u20A6' + n.toLocaleString('en-NG')