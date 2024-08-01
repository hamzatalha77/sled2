import Header from './components/layouts/header'
import Collab from './components/layouts/collab'
import About from './components/layouts/about'
import News from './components/layouts/news'
import Services from './components/layouts/services'
import Products from './components/layouts/products'
import Hero from './components/layouts/hero'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Collab />
      <About />
      <News />
      <Products />
      <Services />
    </div>
  )
}

export default App
