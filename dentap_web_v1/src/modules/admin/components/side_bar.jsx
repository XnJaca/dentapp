import React, { useState } from 'react'
import { FiActivity, FiCalendar, FiMonitor, FiShoppingBag, FiUser } from 'react-icons/fi'
import { ImagesUrl } from '../../../core/const/'
import { SideBarLi } from '../../components'
import { Link } from 'react-router-dom';


export const SideBar = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevDropdowns) => {
      const isOpen = prevDropdowns[dropdownId] ?? false;
      return { ...prevDropdowns, [dropdownId]: !isOpen };
    });
  };

  const isDropdownOpen = (dropdownId) => {
    return dropdowns[dropdownId] ?? false;
  };

  return (
    <div className="main-sidebar sidebar-style-2" style={{ overflow: 'hidden', outline: 'none' }}>
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">
            <img alt="image" src={ImagesUrl.logo} className="header-logo" /> <span className="logo-name">DENTAPP</span>
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Principal</li>
          <SideBarLi icon={FiMonitor} text="Dashboard" />

          <li className="menu-header">Administrar</li>

          <li className="dropdown" onClick={() => toggleDropdown('users')}>
            <a href="#" className="menu-toggle nav-link has-dropdown">
              <i><FiUser size={20}></FiUser></i><span>Usuarios</span>
            </a>
            <ul className={`dropdown-menu ${isDropdownOpen('users') ? 'show' : ''}`}>

              <li><a className="nav-link" href="#">Personal Administrativo</a></li>
              <li><a className="nav-link" href="#">Pacientes</a></li>
            </ul>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown('diseases')}>
            <a href="#" className="menu-toggle nav-link has-dropdown">
              <i><FiActivity size={20}></FiActivity></i><span>Informacion de Salud</span>
            </a>
            <ul className={`dropdown-menu ${isDropdownOpen('diseases') ? 'show' : ''}`}>
              {/* <Link to="/admin/user" className={`btn btn-sm ${color} shadow-button`}> Gestionar </Link> */}
              <li><Link to="/admin/enfermedades" className={`nav-link`}> Enfermedades </Link></li>
              <li><Link to="/admin/alergias" className={`nav-link`}> Alergias </Link></li>
            </ul>
          </li>
          {/* <SideBarLi icon={FiShoppingBag} text="Medicamentos" linkTo={"admin/medicamentos"} /> */}

          <Link to="/admin/medicamentos" className={`nav-link`}><i><FiShoppingBag size={20}></FiShoppingBag></i> Medicamentos</Link>
          <Link to="/admin/horarios" className={`nav-link`}><i><FiShoppingBag size={20}></FiShoppingBag></i> Horarios</Link>
          <li className="menu-header">Horarios</li>
          <li className="dropdown">
            <a href="index.html" className="nav-link"><i><FiCalendar size={20}></FiCalendar></i><span>Citas</span></a>
          </li>
        </ul>
      </aside>
    </div>
  );
};