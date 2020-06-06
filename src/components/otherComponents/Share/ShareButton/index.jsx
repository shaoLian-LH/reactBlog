import React from 'react';
import { QqOutlined } from '@ant-design/icons';
import './shareButton.scss';

function ShareButton(props){
    return (
        <div 
            id="share-button-item" 
            className = { props.className !== undefined ? props.className :'' }
        >
            { props.icon !== undefined ? props.icon : <QqOutlined /> }
        </div>
    )
}

export default ShareButton;