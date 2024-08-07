import Hero from '../sections/hero'
import Aboutus from '../sections/aboutus'
import Products from '../sections/products'
// import Collab from '../sections/collab'
import News from '../sections/news'
// import Services from '../sections/services'
import Moving from '../sections/moving'
import Clients from '../sections/clients'

const Main = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Moving />
      <Products />
      <Clients />
      {/* <Collab /> */}
      <News />
      {/* <Services /> */}
    </div>
  )
}

export default Main
