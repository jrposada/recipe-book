import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import AppFooter from './app-footer'
import AppHeader from './app-header'

import './app-layout.scss'

const HomePage = lazy(() => import('./pages/home-page'))
const RecipesPage = lazy(() => import('./pages/recipes-page'))
const UserPage = lazy(() => import('./pages/user-page'))

function AppLayout() {
  return (
    <div className="app-layout">
      <AppHeader />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default AppLayout
