import React from "react";
function Cards(props){
    return(
    <div className="card-container">
        <h2 style={{textAlign:"center"}}>{props.title}</h2>
        <div className="image-container">
            <img src={props.image} alt="moviesPoster"/>
        </div>
        <p style={{textAlign:"center"}}>{props.year}</p>
        
    </div>
    );
}
export default Cards;