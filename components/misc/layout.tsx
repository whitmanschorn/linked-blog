import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="pg-page">
      <Sidebar />
      <div className="pg-column">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
