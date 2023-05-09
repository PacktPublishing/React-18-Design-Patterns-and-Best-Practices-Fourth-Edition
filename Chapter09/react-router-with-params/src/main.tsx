// Dependencies
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

// Routes
import AppRoutes from './routes'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <AppRoutes />
  </Router>
)