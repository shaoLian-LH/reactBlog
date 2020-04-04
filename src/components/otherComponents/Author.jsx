import React from 'react';
import '../../style/commponent/otherComponents/author.css';
import kyaru from '../../image/kyaru.png';
import Friend from './Friend';
import BackIndexBtn from './BackIndexBtn';
function Author(){
    
    return (
        <div className = "author-main-div">
            <div className = "back-btn-div">
                <BackIndexBtn />
            </div>
            <div className = "author-intro-div">
                <img className = "author-img" src={ kyaru } alt="凯露头.jpg"/>
                <p className = "author-name">邵莲</p>
                <p className = "author-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾经是舰狗。一名软件工程专业前端方向的学生。这个网站以记录本人日常学习经验、踩过的坑和放作业为主。</p>
            </div>
            <Friend />      
        </div>
    );
   
}

export default Author;