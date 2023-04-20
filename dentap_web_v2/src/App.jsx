import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./styles.css"
import { AppRouter } from './modules/router/app_router'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}