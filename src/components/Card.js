import React from "react"


//old code

//import Wedding from "../images/wedding.png"
//import Bike from "../images/bike.png"

/* export default function Card(props) {
  console.log(props)
    return (
        <div className="container">
            <img src={`../images/${props.img}`} className="card" alt="katie"></img>
            <img src={Star} className="star"></img>
            <span>{props.rating}</span>
            <p className="numofreviews">({props.reviewCount})</p>
            <p className="numofreviews">({props.country})</p>
            <p className="desc">{props.title}</p>
            <p className="price"> <strong>From ${props.price}</strong> / person</p>
        </div>
    )
}
*/ 


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img 
                src={`../images/${props.item.coverImg}`} 
                className="card-image" 
            />
            <div className="card-stats">
                <img src="../images/star.png" className="card-star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price">
                <span className="bold">From ${props.item.price}</span> / person
            </p>
        </div>
    )
}