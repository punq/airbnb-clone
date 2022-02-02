import React from "react"
import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="nav-logo"/>
        </nav>
    )
}


