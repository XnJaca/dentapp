import React from 'react'

export const SideBarLi = ({icon: Icon, text}) => {
    return (
        <li className="dropdown">
            <a href="index.html" className="nav-link"><i><Icon size={20} /></i><span>{text}</span></a>
        </li>
    )
}
