import React from 'react';
import IndexList from '../components/home/IndexList';
import Note from '../pages/Note';
import ToolBox from '../pages/ToolBox';
import { SettingOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
// 确定大组件的路由配置
let PathConfig = [{
    path: '/', exact:true, component: IndexList, Icon: (<HomeOutlined />)
},{
    path: '/note', exact: false, component: Note, Icon: (<AppstoreOutlined />)
},{
    path: '/tools', exact: true, component: ToolBox, Icon: (<SettingOutlined />)
}];
export default PathConfig;