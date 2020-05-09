import React from 'react';
import './messageboard.scss';
import { SketchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function MessageBoard(){
    return(
        <Link className = "notepaper-link" key="toComment" to = "/blog/comment">
            <div id="notepaper-main-div">
                <div className = "notepaper-hint">留言板 <SketchOutlined />-1500</div>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
                <span className = "notepaper"></span>
            </div>
        </Link>
    )
}

export default MessageBoard;