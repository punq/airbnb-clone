import React from "react"
import Card1 from "../images/card1.png"
import Star from "../images/star.png"
import Wedding from "../images/wedding.png"
import Bike from "../images/bike.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <main className="container">
            <img src={Card1} className="Card1"></img>
            <img src={Star} className="Star"></img>
            <p className="rating">5.0</p>
            <p className="numofreviews">(6) - USA</p>
            <p className="desc">Life lessons with Katie Zaferes</p>
            <p className="price"> <strong>From $136</strong> / person</p>
            
            <img src={Wedding} className="Wedding"></img>
            <img src={Star} className="Star"></img>
            <p className="rating">5.0</p>
            <p className="numofreviews">(6) - USA</p>
            <p className="desc">Life lessons with Katie Zaferes</p>
            <p className="price"> <strong>From $136</strong> / person</p>
        </main>
    )
}