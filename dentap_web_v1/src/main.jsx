import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './core/App'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/app.min.css'
import './assets/css/style.css'
import './assets/css/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
