import React, { useEffect, useState, useContext } from 'react';
import '../style/commponent/common.css';
import '../style/commponent/noteList.css';
import '../style/pages/home.css';
import { FetchesContext } from '../pages/Home';
import axios from 'axios';
import { RequestALLArticles, ReceiveAticlesInfos } from '../store/action';
import CONSTURL from '../config/apiUrl';
import { Link } from 'react-router-dom';
import { CalendarOutlined, FireOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

function NoteList(){

    const ctx = useContext(FetchesContext);
    const [reFetch]=useState(ctx.fetchesState.isFetching);
    const [list, setList] = useState([]);
    const [pn] = useState(1);

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
        ctx.dispatch(RequestALLArticles());
        let url = CONSTURL.GET_ALL_ARTICLE + pn;
        axios
        .get(url)
        .then(res => {
            ctx.dispatch(ReceiveAticlesInfos(res));
            setList(ctx.fetchesState.articleList);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reFetch, pn])


    return (
        <div className="article-div">
            {
                list.map((item) => {
                    return (
                        <Link
                            key = { item.id }
                            to = { "/note/detail?id="+item.id }>
                            <div className = "article-body" >
                                <div className="article-showdow"></div>
                                <div className="article-title-div">
                                    <div className="article-cell">
                                        <p className = "article-title">{ item.title }</p>
                                        <p className = "article-tag">{ item.tagName }</p>
                                    </div>
                                </div>
                                <div className="article-introduce-div">
                                    <div className="article-cell">
                                        <p 
                                            className="article-introduce"
                                            dangerouslySetInnerHTML = {{ __html: marked(item.introduce) }}
                                        ></p>
                                    </div>
                                </div> 
                                <div className = "article-icon-div">
                                    <CalendarOutlined />{ item.addTime }&nbsp;&nbsp;&nbsp;&nbsp;
                                    <FireOutlined />{ item.fire }
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