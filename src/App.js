import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Card from "./components/Card"
import "./style.css"


export default function App() {
    return (
        <div>
            <Navbar />
            <Grid />
            <Card />
        </div>
    )
}