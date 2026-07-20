import Link from 'next/link'
import { useRouter } from 'next/router'

/*
 * PG's nav strip, as real elements instead of a GIF imagemap.
 * Every href here resolves to a note in the vault's publish/ folder — add a
 * row only once the corresponding note exists, or it will 404.
 */
const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Books', href: '/Books' },
  { label: 'Cooking', href: '/Cooking' },
  { label: 'Reading', href: '/2026 Reading List' },
  { label: 'Wikipedia', href: '/Wikipedia' },
  { label: 'Youtube', href: '/Youtube' },
]

const Sidebar = () => {
  const router = useRouter()
  const here = decodeURIComponent(router.asPath)

  return (
    <nav className="pg-nav" aria-label="Site">
      {NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={here === item.href ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Sidebar
