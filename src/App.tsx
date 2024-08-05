import Header from './components/layouts/header'
import Collab from './components/layouts/collab'
import About from './components/layouts/about'
import News from './components/layouts/news'
import Services from './components/layouts/services'
import Products from './components/layouts/products'
import Hero from './components/layouts/hero'
import Footer from './components/layouts/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Products />
      <Collab />
      <News />
      <Services />
      <Footer />
    </div>
  )
}

export default App
