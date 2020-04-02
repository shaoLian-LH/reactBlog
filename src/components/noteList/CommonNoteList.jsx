import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import PageNav from '../listNav/PageNav';
import TagNav from './TagNav';
import { createBrowserHistory  } from 'history';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import CONSTURL from '../../config/apiUrl';
import '../../style/commponent/note/commonNoteList.css';
// 该组件由两个子组件组成（NoteList与TagNav）
function CommonNoteList(){

    // 获取history元素用以改变路径
    const history = createBrowserHistory();
    // 初次渲染时根据路由判断是否需要刷新出特定的笔记列表
    const initialList = useLocation();
    // 确定该组件是否为初次渲染
    const [ initialMe, setInitialMe ] = useState(false);
    // 通知子组件NoteList此时是否正在获取新的数据
    const [ isReLoad, setIsReLoad ] = useState(true);
    // 当前所处的路由
    const [ location, setLocation ] = useState("");
    // 父组件持有数据数组
    const [ list, setList ] = useState([]);
    // 父组件持有翻页数据数组
    const [ pageInfo, setPageInfo ] = useState([]);
    // 查询的页数
    const [ pn, setPn ] = useState("1");
    
    useEffect(()=>{
        if(initialMe === false){
            _loadData(initialList.search);
            setLocation(initialList.search);
            setInitialMe(true);
        }
        if(isReLoad && initialMe){
            _loadData(location);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ isReLoad, pn ])

    // 此方法与TagNav联动，TagNav中点击搜索按钮将会调用此方法
    // e代表下个url地址
    const reveiveChanged=(e)=>{
        history.push(e);
        setLocation(e);
        setIsReLoad(true);
    }

    // 根据路由刷新数据
    const _loadData = (location)=>{
        let str = location;
        // 刷新列表有两个选项
        // 没有参数的默认列表获取（获取全部类型的笔记）
        if(str != null && str.length!==0){
            // 拼接页号指示
            if(str.indexOf("pn") === -1)
                str = str + "&pn=" + pn;
            let url = CONSTURL.GET_ARTICLES_BY_PARAMS + str;
            // 改变当前页面的链接
            history.push(str);
            Axios
            .get(url)
            .then(res => {
                setIsReLoad(false);
                setList(res.data.infos.list);
                setPageInfo(res.data.infos);
            });
        // 至少根据一个typeId或title参数获得笔记列表
        } else {
            // 改变当前页面的链接
            let temp = "?pn=" + pn;
            history.push(temp);
            let url = CONSTURL.GET_ARTICLES_BY_PARAMS + temp;
            Axios
            .get(url)
            .then(res => {
                setIsReLoad(false);
                setList(res.data.infos.list);
                setPageInfo(res.data.infos);
            });
        }
    }

    // 监听PageNav组件的点击
    const handleNext = (value) => {
        if(value === "next"){
            let temp = (pn-0) +1;
            setPn(temp+"");
        }else if (value === "pre"){
            let temp = (pn-0) - 1;
            if( temp <= 0 ){
                setPn(1);
            }else {
                setPn(temp);
            }
        }else{
            setPn(value);
        }
        setIsReLoad(true);
    }

    // 监听TagNav组件点击清空事件
    const handleClearChoice = ()=>{
        setLocation("");
        setIsReLoad(true);
    }
    
    return(
        <div id="common-note-list-main-div">
            <TagNav 
                handlerClick = { reveiveChanged } 
                handlerClear = { handleClearChoice }
            />
            <NoteList
                list = { list } 
                isReLoad = { isReLoad }
            />
            <PageNav 
                pageList = { pageInfo }
                handleClick = { handleNext }
            />
        </div>
    )
}
export default CommonNoteList;