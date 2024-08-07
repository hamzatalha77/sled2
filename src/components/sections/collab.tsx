import Image1 from '../../assets/images/1.png'
import Image11 from '../../assets/images/1-1.png'
import Image2 from '../../assets/images/2.png'
import Image22 from '../../assets/images/2-2.png'
import Image3 from '../../assets/images/3.png'
import Image33 from '../../assets/images/3-3.png'
import Image4 from '../../assets/images/4.png'
import Image44 from '../../assets/images/4-4.png'
import Image5 from '../../assets/images/5.png'
import Image55 from '../../assets/images/5-5.png'
import Image6 from '../../assets/images/6.png'
import Image66 from '../../assets/images/6-6.png'
const Collab = () => {
  return (
    <section className=" h-screen flex justify-center items-center">
      <div className="our-clients">
        <div className="big-headers">
          <span className="big-header">Our Collab</span>
        </div>

        <ul>
          <li>
            <img src={Image1} alt="" /> <img src={Image11} alt="" />
          </li>
          <li>
            <img src={Image2} alt="" /> <img src={Image22} alt="" />
          </li>
          <li>
            <img src={Image3} alt="" /> <img src={Image33} alt="" />
          </li>
          <li>
            <img src={Image4} alt="" /> <img src={Image44} alt="" />
          </li>
          <li>
            <img src={Image5} alt="" /> <img src={Image55} alt="" />
          </li>
          <li>
            <img src={Image6} alt="" /> <img src={Image66} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Collab
