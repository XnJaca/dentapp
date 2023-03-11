import React from 'react'
import {AppBar} from './components/AppBar'
import { MainDashboard } from './components/MainDashboard'
import { SideBar } from './components/SideBar'

export const AdminPage = () => {
  return (
    <>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg"></div>
            {<AppBar/>}
            {<SideBar/>}
            {<MainDashboard/>}
        </div>
      </div>

    </>
  )
}
