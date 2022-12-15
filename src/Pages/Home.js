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
              A world crafted to house most fantasies as different countries and
              even continents. The lore and world of Kagrea is vast, in depth
              and ever growing. With countries such as Ur the fabric of this
              world is forever changing and our players will actively mold this
              land that is ruled by a demi-god. With political factions,
              powerful beasts, and ancient ruins Ur is at a point of no return.
              Join us in deciding its fate.
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
            Kagrea is a world developed with love by a team of passionate
            writers and creators. Together, they have come together and forged a
            community that bonds over telling stories together in a shared
            universe. The fate of the world is entirely in the players hands and
            there's only one way to find out what the end result will be.
          </p>
          <button className="grapebutton">Learn the History</button>
        </div>
      </div>
    </div>
  )
}

export default Home
