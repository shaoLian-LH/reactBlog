import React from 'react';
import Home from '../../pages/Home';
import Note from '../../pages/Note';
import About from '../../pages/About';
import Comment from '../../pages/Comment';
import { HomeOutlined, FileTextOutlined } from '@ant-design/icons';
const prePath = "/blog";
// 确定大组件的路由配置
let PathConfig = [
    { path: `${prePath}`, exact:true, component: Home, Icon: <HomeOutlined /> },
    { path: `${prePath}/note`, exact: false, component: Note , Icon: <FileTextOutlined />},
    { path: `${prePath}/about`, exact: true, component: About },
    { path: `${prePath}/comment`, exact: true, component: Comment }
];
export default PathConfig;