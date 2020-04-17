import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import './friend.scss';
function Friend(){
    return (
        <div className = 'friend-main-div'>
            <ul className = 'friend-box-ul'>
                <p className = 'friend-box-title'>友情链接</p>
                <li key="cloudHao"><LinkOutlined />&nbsp;&nbsp;<a className="friend-link" href="https://cloudhao.top/#/">陈昀昊的小窝</a></li>
            </ul>
        </div>
    );
}

export default Friend;