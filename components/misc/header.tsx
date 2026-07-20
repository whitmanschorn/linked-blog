import Link from 'next/link'
import { useState } from 'react'
import Search from './search'

const Header = () => {
  const [searching, setSearching] = useState(false)

  return (
    <header style={{ marginBottom: '1.6em' }}>
      <b>
        <Link href="/" aria-label="My Blog">
          Whitman Schorn
        </Link>
      </b>
      {' | '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          setSearching(true)
        }}
      >
        search
      </a>
      <Search visible={searching} setVisible={setSearching} />
    </header>
  )
}

export default Header
