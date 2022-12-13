import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Articles from './Components/Articles'

import './Styles/App.css'

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
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  )
}

export default App
