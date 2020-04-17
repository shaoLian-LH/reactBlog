import React from 'react';
import ship from '../../../static/image/ship.png';
import './loding.scss';
function Loading(){
    return (
        <div id = "loading-main-div">
            <img className = "loading-icon" src={ ship } alt="ship" />
            <div className="loading-water1"></div>
            <div className="loading-water2"></div>
        </div>
    )
}

export default Loading;