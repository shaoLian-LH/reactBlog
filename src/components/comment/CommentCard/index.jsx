import React from 'react';
import './commentCard.scss';
function CommentCard(props){
    const isValid = (item)=>{
        if( item !== undefined && item !== null && item !== "" ){
            return item;
        } else {
            return "";
        }
    }

    return (
        <div className="common-card-main-div">        
            <h2>{ isValid(props.author) }</h2>
            <p className = "common-card-email">{ isValid(props.email) }</p>
            <p className = "common-card-content">{ isValid(props.content) }</p>
            <p className = "common-card-time">{ isValid(props.time) }</p>
        </div>
    )

}

export default CommentCard;