import { useState } from 'react'
import GhostTitle from './ghost-title'
import Search from './search'

const Header = () => {
  const [searching, setSearching] = useState(false)

  return (
    <header>
      <GhostTitle />
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
