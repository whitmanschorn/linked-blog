import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="pg-column">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
