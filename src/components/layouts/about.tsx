import React from 'react'
import Tesla from '../../assets/images/tesla.jpg'
const About = () => {
  return (
    <section className="grid place-items-center min-h-screen w-full">
      <div className="row">
        <div className="imgWrapper">
          <img src={Tesla} />
        </div>
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              <span> </span>New Collection
            </span>
            <h2>something to tell</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              ducimus eaque quae delectus obcaecati culpa, officia, tempora rem
              veniam quibusdam voluptatem nemo sunt ea consequatur ex voluptates
              dicta incidunt molestiae!
            </p>
            <a>another thing over there</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
