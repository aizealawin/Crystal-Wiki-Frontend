import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Articles from './Pages/Articles'
import DeityArticle from './Pages/Articles/DeityArticle'
import './Styles/App.css'
import MapArticle from './Pages/Articles/MapArticle'
import WorldArticle from './Pages/Articles/WorldArticle'
import EditArticle from './Pages/Articles/EditArticle'
import NewArticle from './Pages/Articles/NewArticle'
// Auth Imports
import Register from './Pages/Register'
import SignIn from './Pages/Auth/SignIn'
import { CheckSession } from './Services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/world" element={<Articles />} />
        <Route path="/articles/deities" element={<Articles />} />
        <Route path="/articles/deities/:deityId" element={<DeityArticle />} />
        <Route path="/articles/map/:mapId" element={<MapArticle />} />
        <Route path="/articles/lore/:loreId" element={<WorldArticle />} />
        <Route path="/articles/map" element={<Articles />} />
        <Route path="/edit/:articleId" element={<EditArticle />} />
        <Route path="/new/:articleType" element={<NewArticle />} />
        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route
          path="/signin"
          element={
            <SignIn
              toggleAuthenticated={toggleAuthenticated}
              setUser={setUser}
            />
          }
        />
      </Routes>
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

export default App
