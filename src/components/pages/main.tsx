import Hero from '../layouts/hero'
import Aboutus from '../layouts/aboutus'
import Products from '../layouts/products'
import Collab from '../layouts/collab'
import News from '../layouts/news'
import Services from '../layouts/services'
import Moving from '../layouts/moving'

const Main = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Moving />
      <Products />
      <Collab />
      <News />
      <Services />
    </div>
  )
}

export default Main
