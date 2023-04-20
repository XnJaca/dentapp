import React from 'react'
import { Link } from 'react-router-dom'

export const SideBarLi = ({icon: Icon, text, linkTo}) => {
    return (
        <li className="dropdown">
            {/* <a href="index.html" className="nav-link"><i><Icon size={20} /></i><span>{text}</span></a> */}
            <Link to={linkTo} className={`nav-link`}> <i><Icon size={20} /></i><span>{text}</span></Link>
        </li>
    )
}
