import Client1 from '../../assets/logos/3m.svg'
import Client2 from '../../assets/logos/barstool-store.svg'
import Client3 from '../../assets/logos/budweiser.svg'
import Client4 from '../../assets/logos/buzzfeed.svg'
import Client5 from '../../assets/logos/forbes.svg'
import Client6 from '../../assets/logos/macys.svg'
import Client7 from '../../assets/logos/menshealth.svg'
import Client8 from '../../assets/logos/mrbeast.svg'
const Clients = () => {
  return (
    <section className="min-h-[70vh] grid place-items-center">
      <div className="big-headers">
        <span className="big-header">Our Clients</span>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img className="image-client" src={Client1} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client2} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client3} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client4} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client5} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client6} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client7} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client8} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client1} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client2} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client3} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client4} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client5} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client6} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client7} />
          </div>
          <div className="slide">
            <img className="image-client" src={Client8} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
