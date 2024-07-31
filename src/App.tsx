import React from 'react'
import Header from './components/layouts/header'
import Collab from './components/layouts/collab'
import About from './components/layouts/about'
import News from './components/layouts/news'
import Services from './components/layouts/services'

const App = () => {
  return (
    <div>
      <Header />
      <Collab />
      <About />
      <News />
      <Services />
    </div>
  )
}

export default App
