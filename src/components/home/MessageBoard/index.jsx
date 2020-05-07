import React from 'react';
import './messageboard.scss';
import { SketchOutlined } from '@ant-design/icons';
function MessageBoard(){
    return(
        <div id="notepaper-main-div">
            <div className="notepaper-hint">留言板 <SketchOutlined />-1500</div>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
            <span class="notepaper"></span>
        </div>
    )
}

export default MessageBoard;