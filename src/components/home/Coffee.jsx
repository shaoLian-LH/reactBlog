import React from 'react';
import { Link } from 'react-router-dom';
import coffee from '../../image/coffee.png';
import '../../style/commponent/home/coffee.css';
function Coffee(){
    return (
        <div id = "coffee-main-div">
            <Link
                key = "about" 
                to = "/about"
            >
            <img src={ coffee } alt="coffe"/>
            </Link>
        </div>
    )
}

export default Coffee;