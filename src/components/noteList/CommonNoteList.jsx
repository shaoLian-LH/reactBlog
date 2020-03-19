import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import TagNav from './TagNav';
import { Row, Col } from 'antd';
import { createBrowserHistory  } from 'history';
import { useLocation } from 'react-router-dom'
import Axios from 'axios';
import CONSTURL from '../../config/apiUrl';
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
    // 父组件持有笔记列表数组
    const [ list, setList ] = useState([]);


    useEffect(()=>{
        if(initialMe === false){
            _loadData(initialList.search);
            setInitialMe(true);
        }
        if(isReLoad && initialMe){
            _loadData(location);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ isReLoad ])

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
            let url = CONSTURL.GET_ARTICLES_BY_PARAMS + str;
            Axios
            .get(url)
            .then(res => {
                setIsReLoad(false);
                setList(res.data.infos.list);
            });
        // 至少根据一个typeId或title参数获得笔记列表
        } else {
            let url = CONSTURL.GET_ARTICLES_BY_PARAMS;
            Axios
            .get(url)
            .then(res => {
                setIsReLoad(false);
                setList(res.data.infos.list);
            });
        }
    }
    return(
            <Row 
                type="flex"
                justify="center" >
                <Col xs={ 24 }  sm={ 24 }  md={ 16 } lg={ 16 } xl={ 16 }  xxl={ 16 }>
                    <div id="leftDiv">
                        {/* 左侧的笔记列表 */}
                        <NoteList
                            list = { list } 
                            isReLoad = { isReLoad }
                        />
                    </div>
                </Col>
                <Col xs={ 0 }  sm={ 0 }  md={ 6 } lg={ 6 } xl={ 6 }  xxl={ 6 }>
                    <div id="rightDiv">
                        {/* 右侧的搜索栏和Tag选取区 */}
                        <TagNav 
                            handlerClick = { reveiveChanged }
                        />
                    </div>
                </Col>
            </Row>
    )
}
export default CommonNoteList;