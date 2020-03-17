import React,{ useState, useEffect , Fragment} from 'react';
import { Row, Col, Affix } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify';
import '../style/commponent/blackboard.css';
import { useLocation } from 'react-router-dom';
import CONSTURL from '../config/apiUrl';
import Axios from 'axios';

function DetailNote(){
    const [ isInitial ] = useState(false);
    const [ htmlTitle, setHtmltitle ] = useState("");
    const [ htmlContext, setHtmlContext ] = useState("");

    const location = useLocation();
    const tocify = new Tocify();
    const renderer = new marked.Renderer();

    renderer.heading = function (text, level, raw){
        const anchor = tocify.add(text, level);
        return `<a id="${ anchor }" href="${ anchor }" class="anchor-fix"><h${level}>${ text }</h${level}></a>\n`;
    }
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
        let search = location.search.substring(4);
        let url = CONSTURL.GET_ARTICLE_BY_ID + search;
        Axios
        .get(url)
        .then(res=>{
            let data = res.data.data;
            setHtmltitle(data.title);
            setHtmlContext(data.content);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isInitial ])

    

    return (
        <Fragment>
            <Row>
                <Col xs={ 24 }  sm={ 24 }  md={ 18 } lg={ 18 } xl={ 18 }  xxl={ 18 }>
                <div id="main-blackboard-box">
                    <div className='blackboard-main'>
                        <div className = 'blackboard-title'
                            dangerouslySetInnerHTML = {{ __html : marked(htmlTitle) }}
                        >

                        </div>
                        <div 
                            className='blackboard-body' 
                            dangerouslySetInnerHTML = {{ __html : marked(htmlContext) }}
                        >
                            
                        </div>
                        <div className='blackboard-bottom'></div>
                    </div>
                </div>
            </Col>
            <Col xs={ 0 }  sm={ 0 }  md={ 6 } lg={ 6 } xl={ 6 }  xxl={ 6 }>
                <Affix
                    offsetTop = { 50 }
                >
                <div className="detailed-nav comm-box">
                    <div className="nav-tiitle">文章导航</div>
                    { tocify && tocify.render() }
                </div>
                </Affix>
            </Col>
            </Row>
                  
        </Fragment>
    )
}

export default DetailNote;