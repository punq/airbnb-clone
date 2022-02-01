import React from "react"
import grid from "../images/grid.png"


export default function Grid() {
    return (
        <nav>
            <img src={grid} alt="Image grid" className="main-grid" />
            <h1 className="grid-header">Online Experiences</h1>
            <p className="grid-p">Join unique interactive activities led by one-of-a-kind hosts. All without leaving home.</p>
        </nav>
    )
}


