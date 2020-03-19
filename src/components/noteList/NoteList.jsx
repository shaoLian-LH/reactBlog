import React, { useEffect, useState } from 'react';
import '../../style/commponent/common.css';
import '../../style/commponent/noteList.css';
import '../../style/pages/home.css';
import { Link  } from 'react-router-dom';
import { CalendarOutlined, FireOutlined, LoadingOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

// 笔记列表
function NoteList(props){
    const [ list, setList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        //渲染
        gfm: true,
        //是否启动严格markdown模式
        pedantic: false,
        //是否支持Html的标签
        sanitize: false,
        //和gfm搭配，同样是渲染用
        tables: true,
        //换行符的样式，需要gfm
        breaks: false,
        //列表样式渲染，默认是false
        smartLists: true,
        highlight: function(code){
        return hljs.highlightAuto(code).value;
        }
    });

    useEffect(()=>{
        setList(props.list);
        setIsLoading(props.isReLoad);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ props ])
    
    return (
        <div className="note-div">
         {   isLoading?(<div className="loading-div"><LoadingOutlined /></div>):
                list.map((item) => {
                    return (
                        <Link
                            key = { item.id }
                            to = { "/note/detail?id="+item.id }>
                            <div className = "note-body" >
                                <div className="note-showdow"></div>
                                <div className="note-title-div">
                                    <div className="note-cell">
                                        <p className = "note-title"
                                            dangerouslySetInnerHTML = {{ __html: marked(item.title) }}
                                        ></p>
                                        <p className = "note-tag">{ item.tagName }</p>
                                    </div>
                                </div>
                                <div className="note-introduce-div">
                                    <div className="note-cell">
                                        <p 
                                            className="note-introduce"
                                            dangerouslySetInnerHTML = {{ __html: marked(item.introduce) }}
                                        ></p>
                                    </div>
                                </div> 
                                <div className = "note-icon-div">
                                    <CalendarOutlined />&nbsp;&nbsp;{ item.addTime }&nbsp;&nbsp;&nbsp;&nbsp;
                                    <FireOutlined />&nbsp;&nbsp;{ item.fire }
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default NoteList;