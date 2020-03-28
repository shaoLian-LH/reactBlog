import React from 'react';
import '../../style/commponent/author.css';
import { Row, Col } from 'antd';
import kyaru from '../../image/kyaru.png';
import Friend from './Friend';
function Author(){
    
    return (
        <div className = "author-main-div">
            <Row justify="center">
                <Col xs={ 24 }  sm={ 24 }  md={ 16 } lg={ 16 } xl={ 14 }  xxl={ 14 }>
                    <div className = "author-intro-div">
                        <img className = "author-img" src={ kyaru } alt="凯露头.jpg"/>
                        <p className = "author-name">邵莲</p>
                        <p className = "author-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾经是舰狗。一名软件工程专业前端方向的学生。这个网站以记录本人日常学习经验、踩过的坑和放作业为主。</p>
                    </div>
                    <div className = "friend-link-div">
                        <Friend />
                    </div>
                </Col>
            </Row>           
        </div>
    );
   
}

export default Author;