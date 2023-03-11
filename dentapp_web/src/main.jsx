import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { Provider as AlertProvider, transitions, positions } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
import './style.css'
import './assets/css/app.min.css'
import './assets/bundles/bootstrap-social/bootstrap-social.css'
import './assets/css/style.css'
import './assets/css/components.css'
import './assets/css/custom.css'
import './assets/img/favicon.ico'
import './assets/js/scripts.js'

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

const AlertTemplate = ({ message }) => {
  const alert = useAlert();
  
  return (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={alert.remove}>Cerrar</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
