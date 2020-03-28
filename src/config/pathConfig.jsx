import React from 'react';
import IndexList from '../components/home/IndexList';
import Note from '../pages/Note';
import About from '../pages/About';
import { StarOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
// 确定大组件的路由配置
let PathConfig = [{
    path: '/', exact:true, component: IndexList, Icon: (<HomeOutlined />)
},{
    path: '/note', exact: false, component: Note, Icon: (<BookOutlined />)
},{
    path: '/about', exact: true, component: About, Icon: (<StarOutlined />)
}];
export default PathConfig;