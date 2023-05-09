import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import DashboardPage from './pages/dashboard'
import Error404 from './pages/error404'
import HomePage from './pages/home'
import LoginPage from './pages/login'

const AppRoutes = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Error404 />} />
      </Routes>
    </Router>
  </>
)

export default AppRoutes
