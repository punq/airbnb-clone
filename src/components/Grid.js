import React from "react"
import grid from "../images/grid.png"


export default function Grid() {
    return (
        <section>
            <img src={grid} alt="Image grid" className="grid" />
            <h1 className="grid-header">One-of-a-Kind Experiences</h1>
            <p className="grid-p">Join world-class tours led by expert hosts. All around the world.</p>
        </section>
    )
}


