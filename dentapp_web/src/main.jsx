import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Dentapp } from './dentapp_app'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Dentapp></Dentapp>
    </BrowserRouter>
  </React.StrictMode>,
)
