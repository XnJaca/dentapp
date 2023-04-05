import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import './style.css'
import './assets/js/scripts.js'
import './assets/js/custom.js'
import './assets/js/page/index.js'
import './assets/css/app.min.css'
import './assets/bundles/bootstrap-social/bootstrap-social.css'
import './assets/css/style.css'
import './assets/css/components.css'
import './assets/css/custom.css'
import './assets/img/favicon.ico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
