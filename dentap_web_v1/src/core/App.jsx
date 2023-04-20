import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './router/app_router'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
import './flag.css';
export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
