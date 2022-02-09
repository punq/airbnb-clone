import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Card from "./components/Card"
import Data from "./data"
import "./style.css"


export default function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Grid />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}