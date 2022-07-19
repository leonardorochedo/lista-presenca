import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home' // Importando a page home
import './styles/global.css' // Arquivo css

// DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
