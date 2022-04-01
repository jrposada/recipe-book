import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Recipes from './pages/recipes'
import User from './pages/user'

import './AppBody.scss'

function AppBody() {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default AppBody
