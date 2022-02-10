import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Card from "./components/Card"
import Data from "./data"
import "./style.css"

// Mapping each card into invididual items to display

export default function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })        
    
// Returning entire page contents 
    return (
        <div>
            <Navbar />
            <div className="app-container">
                <Grid />
                <section className="cards-list">
                    {cards}
                </section>
            </div>
        </div>
    )
}