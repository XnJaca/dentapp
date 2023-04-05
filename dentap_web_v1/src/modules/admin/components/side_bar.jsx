import React, { useState } from 'react'
import { FiCalendar, FiMonitor, FiUser } from 'react-icons/fi'
import { ImagesUrl } from '../../../core/const/'
import { SideBarLi } from '../../components'


export const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        console.log('toggleDropdown');
        setIsOpen(!isOpen)
    }


    return (
        <div className="main-sidebar sidebar-style-2" style={{ overflow: 'hidden', outline: 'none' }}>
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index.html"> <img alt="image" src={ImagesUrl.logo} className="header-logo" /> <span
                        className="logo-name">DENTAPP</span>
                    </a>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Principal</li>
                    <SideBarLi icon={FiMonitor} text="Dashboard" />
                    {/* <li className="dropdown">
                        <a href="index.html" className="nav-link"><i><FiMonitor size={20}></FiMonitor></i><span>Dashboard</span></a>
                    </li> */}

                    <li className="menu-header">Administrar</li>

                    <li className="dropdown" onClick={toggleDropdown}>
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i><FiUser size={20}></FiUser></i><span>Usuarios</span></a>
                        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                            <li><a className="nav-link" href="#">Personal Administrativo</a></li>
                            <li><a className="nav-link" href="#">Pacientes</a></li>
                        </ul>
                    </li>
                    <li className="menu-header">Citas</li>
                    <li className="dropdown">
                        <a href="index.html" className="nav-link"><i><FiCalendar size={20}></FiCalendar></i><span>Citas</span></a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
