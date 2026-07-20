import Link from 'next/link'

/*
 * The near-invisible wordmark at the top of every PG page (bel-8.gif).
 * Live text rather than an image, so it stays selectable, zoomable and
 * available to screen readers. Styling lives in .pg-ghost.
 */
const GhostTitle = () => {
  return (
    <Link href="/" className="pg-ghost">
      Whitman Schorn
    </Link>
  )
}

export default GhostTitle
