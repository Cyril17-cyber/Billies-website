import React from "react";
import { Link } from "react-router-dom";
import topImg from "../images/topImg.jpg";
import mid1 from "../images/mid (1).jpg";
import mid2 from "../images/mid (2).jpg";
import mid3 from "../images/mid (3).jpg";
import mid4 from "../images/mid (4).jpg";
import {offerArray} from "./Arrays";
import OfferList from "./subComponts/offerlist";

function Home() {
    return (
        <div className="home">
            <div className="first">
            <div className="top">
                <div className="texts">
                <h1>Delicious</h1>
                <h3>Cakes For You</h3>
                <p>Billie's Confectionaries oofers some of the best cakes, glazed doughnuts, meatpie and lots more!</p>
                <Link to="/contact">Learn More</Link>
                </div>
                <img src={topImg} alt=""/>
            </div>
            <div className="mid">
                <div className="texts">
                    <h2>Top quality cakes</h2>
                    <p>Billie's confectionaries is a trust worthy somthing which delivers top quality cakes all over Kaduna. Orders are strictly only in Kaduna, Nigeria. </p>
                </div>
                <div className="images">
                    <img src={mid1} alt=""/>
                    <img src={mid2} alt=""/>
                    <img src={mid3} alt=""/>
                    <img src={mid4} alt=""/>
                </div>
            </div>
            </div>

            <div className="offer">
                <h2>What We Offer</h2>
                <div className="lists">
                {offerArray.map((items, id) => {
                    return (
                        <OfferList 
                        key={id}
                        items={items}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Home;