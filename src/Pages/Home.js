import React from 'react'
import Nav from '../Components/Nav'

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
            <button className="join-button">Join us!</button>
          </div>
          <div>
            <img
              className="kagrea-crystal"
              src="https://i.imgur.com/r5dSDaO.png"
            />
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="about-us-container">
          <h3>About us</h3>
          <img className="starline" src="https://i.imgur.com/Ab5dZYz.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="history">Learn the History</button>
        </div>
      </div>
    </div>
  )
}

export default Home
