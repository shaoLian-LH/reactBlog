import React from 'react';
import ShareButton from './ShareButton';
import './share.scss';
import { QqOutlined } from '@ant-design/icons';
const buttonCustom = [
    { "icon": <QqOutlined /> }
]
function Share(){
    return (
        <div id = "share-menu-main-div">
            <p className = "share-menu-main-title">文章分享</p>
            <div className = "share-menu-body">
                {
                    buttonCustom.map((item)=>{
                        return (
                            <ShareButton icon={ item.icon }/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Share;