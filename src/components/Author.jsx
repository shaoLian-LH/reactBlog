import React, { useState } from 'react';
import { Avatar } from 'antd';
import cat from '../image/cat.png';
import '../style/commponent/common.css';
import { CSSTransition } from 'react-transition-group';
import useTypewriter from "react-typewriter-hook";
const intro = '曾经是舰狗。一名软件工程前端方向的学生，以某舰改二立绘发色为主题色建的个人博客。这个网站以记录本人日常学习经验、踩过的坑和放期末作业为主。';
function Author(){
    
    const [ isShow, changeIsShow ] = useState(false);
    const [ myIntor, setMyIntro ] = useState('');
    return (
        <div className = 'common-box'>
            <div className = 'common-box-top'>
                <p className = 'common-box-text'>简介</p>
            </div>
            <div id="authorMain"
                onMouseOver = { ()=>{ changeIsShow(true); setMyIntro(intro); } } 
                onMouseOut = { ()=>{ changeIsShow(false); } }
                onMouseLeave = { ()=> { setMyIntro(''); } }
            >
                <CSSTransition in={isShow} timeout={2000} classNames="author-introduction">
                    <div className="author-introduction"> 
                        <p className="common-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ MagicWriter(myIntor) }</p>
                    </div>
                </CSSTransition>
                <div className = "author-div">
                    <div>
                        <Avatar size={ 100 } src={ cat } shape />
                        <p className = "common-text">邵莲</p>
                    </div>
                </div>
            </div>
        </div>
    );
    function MagicWriter(word) {
        const typing = useTypewriter(word)
        return typing;
    }
}

export default Author;