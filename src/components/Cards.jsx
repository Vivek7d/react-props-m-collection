import React from "react";
function Cards(props){
    return(
    <div className="card-container" >
        <div className="card" data-aos="fade-down" >
            <img src={props.img} alt="poster"/>
            <div className="card-content">
                <h3>{props.title}</h3>
                <p>{props.year}</p>
            </div>
        </div>
    </div>
    );
}
export default Cards;