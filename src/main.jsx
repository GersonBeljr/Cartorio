import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CertidaoPage from './pages/CertidaoPage.jsx'
import CompetenciaPage from './pages/CompetenciaPage.jsx'
import InfoPage from './pages/InfoPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/info",
    element: <InfoPage />
  },
  {
    path:"/certidao",
    element: <CertidaoPage />
  },
  {
    path:"/competencias",
    element: <CompetenciaPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
