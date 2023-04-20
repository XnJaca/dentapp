import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } 
from 'react-router-dom'
import {App} from './App'
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';   
import 'primereact/resources/themes/lara-light-indigo/theme.css';                              // icons
import 'primeflex/primeflex.css';                                   // css utility
import './flags.css';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
