import React, { useState, useEffect } from 'react';
import './tagNav.scss';
import { useLocation } from 'react-router-dom';
import { Input, Menu, Dropdown, Button } from "antd";
import CONSTURL from '../../../config/Consturl';
import Request from '../../../config/Request';
import { TagOutlined } from '@ant-design/icons';
// 标签选取区与搜索栏
const clearTagId = "POIEATALL";
function TagNav(props){

    // 获取Home组件创建的上下文，主要获取其中的Tag数组
    const location = useLocation();
    const [ isInitial, setIsInitial ] = useState(false); 
    const [ tagList, setTagList ] = useState([]);
    const [ titleValue, setTitleValue ] = useState("");
    const [ selectedTag, setSelectedTag ] = useState();
    const [ curTagName, setCurTagName ] = useState("All");
    useEffect(()=>{
        if( isInitial === false ){
            loadTagDatas();
            setIsInitial(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ isInitial ])

    const loadTagDatas=()=>{
        Request.get(CONSTURL.GET_ARTICLES_BY_PARAMS+"s")
        .then((res)=>{
            let list = [];
            let first = {
                typeId: clearTagId,
                tagName: "ALL"
            }
            list.push(first);
            list = [ ...list, ...res.data.infos.list ]
            setTagList(list);
            checkCurrentSelect();
        })
    }

    const checkCurrentSelect = ()=>{
        // 根据路由判断此时的选择的Tag类型
        let search = location.search;
        let position = search.indexOf("typeId");
        if( position !== -1 ){
            let arr = search.split("=");
            let typeId = arr[1];
            // 将字符转换为数字
            setSelectedTag(typeId-0);
        }
    }


    const _selectedBtn=(e) =>{
        if( selectedTag !== e ){
            setSelectedTag(e);
        } else {
            setSelectedTag(null);
        }
    }

    const _changeTextValue = (e) => {
        setTitleValue(e);
    }

    const _clickToSearh = () => {
        let type = (selectedTag !== null && selectedTag!==undefined && !selectedTag.isNaN)?("typeId="+selectedTag):"";
        let titleT = titleValue.replace(/\s+/g,"") !== ""?("title="+titleValue):"";
        let url  = "?";
        if(type !== "" && titleT !==""){
            url = url + type + "&" + titleT;
        } else {
            if( type !== "" ){
                url = url + type;
            } else {
                url = url + titleT;
            }
        }
        return url;
    }
    const getMenu = (
        <Menu>
            {
                tagList.map((temp) => {
                    return (
                        <Menu.Item
                            key = { temp.typeId }
                            onClick = { temp.typeId === clearTagId?()=>{ 
                                        setSelectedTag(null)
                                        setTitleValue('')
                                        setCurTagName("All")
                                        props.handlerClear()
                                    }:()=>{
                                        setCurTagName(temp.tagName)
                                        _selectedBtn(temp.typeId);
                                    } }
                        >{ temp.tagName }
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    );

    return (
        <div className = "tagNav-div">
            <p className="tagNav-main-title">搜寻笔记</p>
            <div className = "table-cell-div">
                <TagOutlined className="tag-icon"/>
                <Dropdown overlay={getMenu} placement="topCenter">
                    <Button>{ curTagName }</Button> 
                </Dropdown>
            </div>
            <div className = "target-search-div">
                <Input.Search 
                    value = { titleValue }
                    onChange = { (e)=>{ _changeTextValue(e.target.value) } } 
                    onSearch ={  ()=>{ props.handlerClick(_clickToSearh()) } }
                />
            </div>
        </div>
    );
}

export default TagNav;
