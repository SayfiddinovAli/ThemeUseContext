import React, { Component } from 'react';
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import ThemeContext from '../../Context/ThemeContext';

export default class Header extends Component {
    static contextType = ThemeContext;

    render() {
        const { theme, toggleTheme } = this.context; // context'dan theme va toggleTheme'ni oling

        return (
            <header className={`Header ${theme}`}>
                <nav className={`navbar navbar-expand-lg shadow ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
                    <div className="container">
                        {/* Left Section - Brand */}
                        <a className="navbar-brand fw-bold" href="#" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
                            Ali Sayfiddinov
                        </a>

                        {/* Navbar Toggler for responsive */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {/* Navbar Links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? 'blue' : 'lightblue' }} href="#">
                                        Section Two
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? 'blue' : 'lightblue' }} href="#">
                                        Section Three
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? 'blue' : 'lightblue' }} href="#">
                                        Section Four
                                    </a>
                                </li>
                            </ul>

                            {/* Middle Section - Social Icons */}
                            <ul className="navbar-nav d-flex">
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? '#000' : '#fff' }} href="#">
                                        <CiTwitter size={24} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? '#000' : '#fff' }} href="#">
                                        <FaFigma size={24} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: theme === 'light' ? '#000' : '#fff' }} href="#">
                                        <FaInstagram size={24} />
                                    </a>
                                </li>
                            </ul>

                            {/* Right Section - Dark Mode */}
                            <div className="d-flex align-items-center ms-3">
                                <h6 className="me-2 mb-0" style={{ marginTop: '4px', color: theme === 'light' ? '#000' : '#fff' }}>Dark Mode</h6>
                                <button className="btn btn-light" onClick={toggleTheme}>
                                    <MdOutlineDarkMode size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
