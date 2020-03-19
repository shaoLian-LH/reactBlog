import IndexList from '../components/home/IndexList';
import Note from '../pages/Note';
import ToolBox from '../pages/ToolBox';
// 确定大组件的路由配置
let PathConfig = [{
    path: '/', exact:true, component: IndexList
},{
    path: '/note', exact: false, component: Note
},{
    path: '/tools', exact: true, component: ToolBox
}];
export default PathConfig;