import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from 'components/main-layout/main-layout'

import 'antd/dist/antd.css'
import './app.scss'

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

export default App
