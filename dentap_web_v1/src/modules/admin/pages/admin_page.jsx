import React from 'react'
import { AppBar } from '../components/app_bar'
import { SideBar } from '../components/side_bar'
import { MainContent } from './main_content'
import { Outlet } from 'react-router-dom'

export const AdminPage = ({children}) => {
    console.log("ADMIN PAGE RENDED");
    return (
        <div id="app">
            <div className="main-wrapper main-wrapper-1">
                <div className="navbar-bg"></div>
                <AppBar />
                <SideBar />
                <MainContent children={children}/>
            </div>
        </div>
    )
}
