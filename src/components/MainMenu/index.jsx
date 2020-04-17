import React, { useState, useEffect } from 'react';
import './mainmenu.scss';
import { Menu } from 'antd';
import PathConfig from '../../config/PathConfig';
import { Link, useLocation } from 'react-router-dom';

// 写死的导航菜单
function MainMenu(){

    const [ menuList ] = useState(['首页', '笔记', '关于']);
    const [ selected, setSelected ] = useState("0");
    const location = useLocation();
    
    // 根据路由确定当前Menu的选项
    useEffect(()=>{
        let str = location.pathname;
        if(str === "/"){
            setSelected("0");
            return ;
        }
        for ( let i=1; i < PathConfig.length ;i++ ){
            if ( str.indexOf(PathConfig[i].path) !== -1){
                setSelected(""+i);
                break;
            }
        };
    },[ location ])

    return (
        <div>
            <Menu
                mode="horizontal" 
                defaultSelectedKeys = { ["0"] } 
                selectedKeys = { [selected] }
                >
                {
                    menuList.map((name, index)=>{
                        return(
                            <Menu.Item className = "my-custom-menu" key={ index }>
                                <Link 
                                    key = {index} 
                                    to = {PathConfig[index].path} 
                                >
                                    { PathConfig[index].Icon }
                                    { name }
                                </Link> 
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
            <div className="break-div"></div>
        </div>
    );
}


export default MainMenu;