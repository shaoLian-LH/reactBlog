import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';  
import '../../style/commponent/otherComponents/backIndeBtn.css';
function BackIndexBtn(){
    return (
        <Link 
            key = "link-to-index" 
            to = "/"
        >
            <div className = "back-to-index-btn">
                <p><HomeOutlined /></p>
            </div>
        </Link>
    )
}

export default BackIndexBtn;