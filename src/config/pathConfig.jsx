import IndexList from '../components/IndexList';
import Note from '../pages/Note';
import ToolBox from '../pages/ToolBox';
let PathConfig = [{
    path: '/', exact:true, component: IndexList
},{
    path: '/note', exact: false, component: Note
},{
    path: '/tools', exact: true, component: ToolBox
}];
export default PathConfig;