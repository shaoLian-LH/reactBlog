import React from 'react';
import ship from '../../image/ship.png';
import '../../style/commponent/otherComponents/loding.css';
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