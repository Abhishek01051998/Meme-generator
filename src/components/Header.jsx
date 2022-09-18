import React from "react";
import image from "./images/trollface.jpeg";

export default function  Header() {
    return (
        <div className="header">
        <img src={image}  className="header--image"/>

        <h2 className="header--title">Meme Generatorr</h2>
        <h4 className="header--project">React Course - Project 3</h4>

        </div>
    )
}