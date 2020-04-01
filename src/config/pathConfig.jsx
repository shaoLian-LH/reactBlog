import Home from '../pages/Home';
import Note from '../pages/Note';
import About from '../pages/About';
// 确定大组件的路由配置
let PathConfig = [{
    path: '/', exact:true, component: Home
},{
    path: '/note', exact: false, component: Note
},{
    path: '/about', exact: true, component: About
}];
export default PathConfig;