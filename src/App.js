import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Articles from './Pages/Articles'
import DeityArticle from './Pages/Articles/DeityArticle'
import './Styles/App.css'
import MapArticle from './Pages/Articles/MapArticle'
import WorldArticle from './Pages/Articles/WorldArticle'
import EditArticle from './Pages/Articles/EditArticle'
import NewArticle from './Pages/Articles/NewArticle'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles/world" element={<Articles />} />
        <Route path="/articles/deities" element={<Articles />} />
        <Route path="/articles/deities/:deityId" element={<DeityArticle />} />
        <Route path="/articles/map/:mapId" element={<MapArticle />} />
        <Route path="/articles/lore/:loreId" element={<WorldArticle />} />
        <Route path="/articles/map" element={<Articles />} />
        <Route path="/edit/:articleId" element={<EditArticle />} />
        <Route path="/new/:articleType" element={<NewArticle />} />
      </Routes>
      <footer></footer>
    </div>
  )
}

export default App
