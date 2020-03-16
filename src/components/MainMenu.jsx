import React, { useState } from 'react';
import '../style/commponent/mainmenu.css';
import { Menu } from 'antd';
import PathConfig from '../config/pathConfig';
import { Link } from 'react-router-dom';
import { SettingOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';

function MainMenu(){
    
    const [ menuList ] = useState(['首页', '笔记', '工具箱']);

    return (
        <div>
            <Menu 
                mode="horizontal" 
                defaultSelectedKeys = { ["1"] } 
                >
                {
                    menuList.map((name, index)=>{
                        if(index !== menuList.length-1 && index !== 0){
                            return(
                                <Menu.Item 
                                    className='menu-item menu-medium' 
                                    key={ index } 
                                >
                                    <Link 
                                        key = {index} 
                                        to = {PathConfig[index].path} 
                                    >
                                        <SettingOutlined
                                            className="myIcon" 
                                        /> 
                                        { name }
                                    </Link>
                                </Menu.Item>
                            )
                        } else if(index === 0) {
                            return(
                                <Menu.Item  className='menu-item' key={ index }>
                                    <Link 
                                        key = {index} 
                                        to = {PathConfig[index].path} 
                                    >
                                        <HomeOutlined className="myIcon" />
                                        { name }
                                    </Link> 
                                </Menu.Item>
                            )
                        } else {
                            return(
                                <Menu.Item  className='menu-item' key={ index }>
                                    <Link 
                                        key = {index} 
                                        to = {PathConfig[index].path} 
                                    >
                                        <AppstoreOutlined className="myIcon" />
                                        { name }
                                    </Link> 
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        </div>
    );
}


export default MainMenu;