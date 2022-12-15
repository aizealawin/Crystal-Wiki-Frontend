import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="intro-holder">
        <div className="container">
          <div className="home-body">
            <div className="welcome">Welcome To</div>
            <div className="kagrea-name">Kagrea</div>
            <h4>A World of Magic - Crystal: 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            {/* leads to login / register */}
            <button className="night-button">Join us!</button>
          </div>
          <div>
            <img
              className="kagrea-crystal"
              src="https://i.imgur.com/r5dSDaO.png"
              alt="kagrea crystal"
            />
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="about-us-container">
          <h2>About us</h2>
          <img
            className="starline"
            src="https://i.imgur.com/Ab5dZYz.png"
            alt="starline"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="grapebutton">Learn the History</button>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-part">
            <img
              className="icon-image"
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt="discord icon"
            />
            <p> Kagrea Discord</p>
          </div>
          <div className="footer-part">
            <p> Designed By Kusal Tholka Mudalige</p>
          </div>
          <div className="footer-part">
            <img
              className="icon-image"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin icon"
            />
            <p> My LinkedIn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
