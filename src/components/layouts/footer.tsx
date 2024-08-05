const Footer = () => {
  return (
    <section className=" bottom-0 relative">
      <footer>
        <div className="footercontainer">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              voluptatem earum tempora error, nihil labore fuga veritatis
              expedita dignissimos quisquam quo natus maiores dicta fugiat odio
              eligendi doloremque dolores iusto? Possimus deserunt neque quia?
              Distinctio reprehenderit eum animi totam quis quasi sequi facere
              at corporis.
            </p>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec footercontact">
            <h2>Contact Info</h2>
            <ul className="footerinfo">
              <li>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <span>
                  Lorem ipsum dolor sit amet. <br />
                  Lorem ipsum dolor sit amet. <br />
                  MAROC
                </span>
              </li>
              <li>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>
                  <a href="tel:123456789000">+1 234 567 8900</a>
                  <br /> <a href="tel:123456789000">+1 234 567 8900</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>
                  <a href="mailto:knowmore@gmail.com">knowmore@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright © 2024 Online Tutorials. All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer
