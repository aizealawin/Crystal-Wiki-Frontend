import { Route, Routes } from 'react-router-dom'
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
  return (
    <div className="App">
      <header className="App-Header">
        <Nav />
      </header>
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
    </div>
  )
}

export default App
