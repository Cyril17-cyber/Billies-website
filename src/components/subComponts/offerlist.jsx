import React from "react";

function OfferList(props) {
    return (
        <div className="list">
            <img src={props.items.img} alt=""/>
            <div className="texts">
                <h2>{props.items.head}</h2>
                <p>{props.items.body}</p>
            </div>
        </div>
    )
}

export default OfferList;