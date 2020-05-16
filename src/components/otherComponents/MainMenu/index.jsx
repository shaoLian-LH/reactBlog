import React, { useState, useEffect } from 'react';
import './mainmenu.scss';
import PathConfig from '../../../config/PathConfig';
import { Link, useLocation } from 'react-router-dom';
// 写死的导航菜单
function MainMenu(){

    const [ menuList ] = useState(['首页', '笔记']);
    const [ selected, setSelected ] = useState(0);
    const location = useLocation();
    
    // 根据路由确定当前Menu的选项
    useEffect(()=>{
        let str = location.pathname;
        if(str === "/blog"){
            setSelected(0);
            return ;
        }
        for ( let i=1; i < PathConfig.length ;i++ ){
            if ( str.indexOf(PathConfig[i].path) !== -1){
                setSelected(i);
                break;
            }
        };
    },[ location ])

    return (
        <div id = "bottom-menu-main-div">
            {
                menuList.map((name, index)=>{
                    return(
                        <Link 
                            className = { selected === index ? "bottom-menu-item bottom-menu-item-selected" : "bottom-menu-item" } 
                            key = {index} 
                            to = {PathConfig[index].path} 
                        >
                            <p className = "bottom-menu-item-icon">{ PathConfig[index].Icon }</p>
                            <p className = "bottom-menu-item-name">{ name }</p>
                        </Link> 
                    )
                })
            }
        </div>
    );
}


export default MainMenu;