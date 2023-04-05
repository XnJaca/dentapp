import React from 'react'

import { routesImages } from '../../assets'
import { FiMail, FiBell, FiAlignJustify } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';
import '../../../assets/js/scripts'

export const AppBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav className="navbar navbar-expand-lg main-navbar sticky">
            <div className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg
                            collapse-btn"><FiAlignJustify color='grey' size={30}></FiAlignJustify></a></li>
                </ul>
            </div>
            <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                    className="nav-link nav-link-lg message-toggle">
                    <FiMail size={25} color='#555556' />
                    <span className="badge headerBadge1">
                        6 </span> </a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                        <div className="dropdown-header">
                            Messages
                            <div className="float-right">
                                <a href="#">Mark All As Read</a>
                            </div>
                        </div>
                        <div className="dropdown-list-content dropdown-list-message">
                            <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar
                                    text-white"> <img alt="image" src={routesImages.user1} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">John
                                Deo</span>
                                    <span className="time messege-text">Please check your mail !!</span>
                                    <span className="time">2 Min Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                <img alt="image" src={routesImages.user2} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                                Smith</span> <span className="time messege-text">Request for leave
                                    application</span>
                                    <span className="time">5 Min Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                <img alt="image" src={routesImages.user5} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">Jacob
                                Ryan</span> <span className="time messege-text">Your payment invoice is
                                    generated.</span> <span className="time">12 Min Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                <img alt="image" src={routesImages.user4} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">Lina
                                Smith</span> <span className="time messege-text">hii John, I have upload
                                    doc
                                    related to task.</span> <span className="time">30
                                        Min Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                <img alt="image" src={routesImages.user3} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">Jalpa
                                Joshi</span> <span className="time messege-text">Please do as specify.
                                    Let me
                                    know if you have any query.</span> <span className="time">1
                                        Days Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                <img alt="image" src={routesImages.user2} className="rounded-circle" />
                            </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                                Smith</span> <span className="time messege-text">Client Requirements</span>
                                    <span className="time">2 Days Ago</span>
                                </span>
                            </a>
                        </div>
                        <div className="dropdown-footer text-center">
                            <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </li>
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                    className="nav-link notification-toggle nav-link-lg"><FiBell color='#478982' size={25} />
                </a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                        <div className="dropdown-header">
                            Notifications
                            <div className="float-right">
                                <a href="#">Mark All As Read</a>
                            </div>
                        </div>
                        <div className="dropdown-list-content dropdown-list-icons">
                            <a href="#" className="dropdown-item dropdown-item-unread"> <span
                                className="dropdown-item-icon bg-primary text-white"> <i className="fas
                                        fa-code"></i>
                            </span> <span className="dropdown-item-desc"> Template update is
                                available now! <span className="time">2 Min
                                    Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
                                        fa-user"></i>
                            </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                                Sugiharto</b> are now friends <span className="time">10 Hours
                                    Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i
                                className="fas
                                        fa-check"></i>
                            </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                                moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                                    Hours
                                    Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i
                                className="fas fa-exclamation-triangle"></i>
                            </span> <span className="dropdown-item-desc"> Low disk space. Let's
                                clean it! <span className="time">17 Hours Ago</span>
                                </span>
                            </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
                                        fa-bell"></i>
                            </span> <span className="dropdown-item-desc"> Welcome to Otika
                                template! <span className="time">Yesterday</span>
                                </span>
                            </a>
                        </div>
                        <div className="dropdown-footer text-center">
                            <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><a href="#" data-toggle="dropdown"
                    className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src={routesImages.user1}
                        className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block"></span></a>
                    <div className="dropdown-menu dropdown-menu-right pullDown">
                        <div className="dropdown-title">Hello Sarah Smith</div>
                        <a href="profile.html" className="dropdown-item has-icon"> <i className="far
                                fa-user"></i> Profile
                        </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                            Activities
                        </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                            Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item has-icon text-danger" onClick={onLogout}> <i className="fas fa-sign-out-alt"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
