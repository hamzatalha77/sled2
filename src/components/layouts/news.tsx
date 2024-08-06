import News1 from '../../assets/images/news1.jpg'
// import News2 from '../../assets/images/news2.jpg'
// import News3 from '../../assets/images/news3.jpg'
const News = () => {
  return (
    <section id="blog">
      <div className="big-headers">
        <span className="big-header">Our News</span>
      </div>
      {/* <div className="blog-heading">
        <span>Our Recent Posts</span>
        <h3>My Blog</h3>
      </div> */}
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-img">
            <img src={News1} alt="blog" />
          </div>
          <div className="blog-text">
            <span>18 july 2024 / web design</span>
            <a href="#" className="blog-title">
              what has happened of all of the web design ideas?
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quo voluptate ex eveniet accusantium a deserunt! Quaerat, impedit
              deleniti. Aliquam, minus voluptatibus? Doloribus eaque sint
              repellat et tenetur, ex minus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={News1} alt="blog" />
          </div>
          <div className="blog-text">
            <span>18 july 2024 / web design</span>
            <a href="#" className="blog-title">
              what has happened of all of the web design ideas?
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quo voluptate ex eveniet accusantium a deserunt! Quaerat, impedit
              deleniti. Aliquam, minus voluptatibus? Doloribus eaque sint
              repellat et tenetur, ex minus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={News1} alt="blog" />
          </div>
          <div className="blog-text">
            <span>18 july 2024 / web design</span>
            <a href="#" className="blog-title">
              what has happened of all of the web design ideas?
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quo voluptate ex eveniet accusantium a deserunt! Quaerat, impedit
              deleniti. Aliquam, minus voluptatibus? Doloribus eaque sint
              repellat et tenetur, ex minus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
