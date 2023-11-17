import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


export default function Navbar() { // Created Navbar with 5 main components (links)

    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div id="navbar" className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>ABOUT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/products'>CATALOGUE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/addproduct'>ADD PRODUCT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>CONTACT US</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

