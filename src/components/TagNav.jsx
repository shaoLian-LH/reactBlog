import React, { useState, useContext, useEffect } from 'react';
import { FetchesAllArticlesContext } from '../pages/Home';
import '../style/commponent/tagNav.css';
import { Input } from "antd";

function TagNav(){

    const ctx = useContext(FetchesAllArticlesContext);
    const [ isFetching ] = useState(ctx.fetchesAllArticlesState.isFetching); 
    const [ tagList, setTagList ] = useState([]);
    const [ titleValue, setTitleValue ] = useState("");
    const [ selectedTag, setSelectedTag ] = useState();

    useEffect(()=>{
        setTagList(ctx.fetchesAllArticlesState.articleList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ isFetching ])

    const _selectedBtn=(e) =>{
        setSelectedTag(e);
    }

    const _changeTextValue = (e) => {
        setTitleValue(e);
    }

    const _clickToSearh = () => {
        console.log("点击了")
    }
    return (
        <div className = "tagNav-div">
            <div className = "tagNav-title">
                搜寻笔记
            </div>
            <div className = "target-search-div">
                <Input.Search 
                    value = { titleValue }
                    onChange = { (e)=>{ _changeTextValue(e.target.value) } } 
                    onSearch ={ ()=>{ _clickToSearh()} }
                />
            </div>
            <div className = "table-cell-div">
                {
                    tagList.map((temp) => {
                        return (
                            <button 
                                key = { temp.typeId }
                                className = { selectedTag === temp.typeId ? "table-cell table-cell-selected":"table-cell"  }
                                onClick = { ()=>{ _selectedBtn(temp.typeId) } }
                            >
                                { temp.tagName }
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TagNav;
