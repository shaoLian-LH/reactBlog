import React from 'react';
import { Link } from 'react-router-dom';
import coffee from '../../../static/image/coffee.png';
import './coffee.scss';
function Coffee(){
    return (
        <div id = "coffee-main-div">
            <Link
                key = "about" 
                to = "/blog/about"
            >
            <img src={ coffee } alt="coffe"/>
            </Link>
        </div>
    )
}

export default Coffee;