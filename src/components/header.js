
import React from "react"
import logo from "../images/react-logo.png"

export default function Header () {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />
                <h3 className="nav--logotext">React Facts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}

