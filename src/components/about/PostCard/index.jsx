import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import './postcard.scss';
function Postcard(){
    return (
        <div className = "about-component-postcard-main-div">
            <div className = "about-postcard-title-div">
                <p className = "about-postcard-title">关于本博客</p>
                <p className = "about-postcard-icon"></p>
            </div>
            <div className = "author-intro-div">
                <img className = "author-img" src = "https://yuudachi.cn:444/static/images/article/8f072d3ff68f48b8b270930d6908a421.jpg" alt="这池子不行的.jpg"/>
                <p className = "author-name">邵莲</p>
                <p className = "author-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾经是舰狗。一名软件工程专业前端方向的学生。这个网站以记录本人日常学习经验、踩过的坑和放作业为主。</p>
            </div>
            <div className = 'friend-main-div'>
                <ul className = 'friend-box-ul'>
                    <p className = 'friend-box-title'>友情链接</p>
                    <li key="cloudHao"><LinkOutlined />&nbsp;&nbsp;<a className="friend-link" href="https://cloudhao.top/#/">陈昀昊的小窝</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Postcard;