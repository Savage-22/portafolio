import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './Routes.jsx'
import { ThemeProvider } from './context/ThemeContext'
//import { NoExiste } from './ComponenteInventado';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Rutas />
    </ThemeProvider>
  </StrictMode>,
)
