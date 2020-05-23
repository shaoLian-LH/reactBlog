import React from 'react';
import './postCardBox.scss';
import { useHistory } from 'react-router-dom';
function PostCardBox(props){

    const history = useHistory();

    const handleClick = ()=> {
        history.push("/blog/about");
    }

    return (
        <div className = { props.className !== undefined ? `postcard-box-main-div ${props.className}`: "postcard-box-main-div" } >
            <div className = "postcard-box-inset-div">
                <div className="postcord-card-div" onClick = { () => { handleClick() } }>
                    <p className="postcard-hint">About</p>
                </div>
            </div>
        </div>
    )
}

export default PostCardBox;