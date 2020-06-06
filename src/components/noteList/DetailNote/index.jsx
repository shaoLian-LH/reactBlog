import React,{ useState , Fragment, useEffect, useContext} from 'react';
import { Row, Col } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../../../components/otherComponents/Tocify';
import CONSTURL from '../../../config/Consturl';
import Request from '../../../config/Request';
import Empty from '../../otherComponents/Empty';
import { NoteArticleContext } from '../../../pages/Note';
import Share from '../../otherComponents/Share';
import './detailNote.scss';
// 详细笔记页面
function DetailNote(){
    const ctx = useContext(NoteArticleContext);

    // 判断当前页面是否为初次渲染
    const [ articleId, setArticleId ] = useState('');
    // 将标题和内容的markdown标签进行解析与渲染
    const [ htmlTitle, setHtmltitle ] = useState("");
    const [ htmlContext, setHtmlContext ] = useState("");
    // 导航插件
    const tocify = new Tocify();
    const renderer = new marked.Renderer();

    renderer.heading = function (text, level, raw){
        tocify.setContainer('detail-note-main-div');
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
        if( ctx.articleId.length !== 0 ){
            loadArticle();
            setArticleId(ctx.articleId);
            if(!ctx.isChanged){
                ctx.setIsChanged(true);
            }
        }
        // eslint-disable-next-line
    },[ ctx.articleId ])

    const loadArticle = ()=>{
        Request.get(CONSTURL.GET_ARTICLE_BY_ID + ctx.articleId)
        .then(res=>{
            let data = res.data.data;
            setHtmltitle(data.title);
            setHtmlContext(data.content);
        })
    }
    
    const getDetailNote =()=>{
        return (
            <Row
                justify = "center"
            >
                <Col xs={ 24 }  sm={ 24 }  md={ 18 } lg={ 18 } xl={ 18 }  xxl={ 18 }>
                    <div id='detail-note-main-div' className = { !ctx.isChanged?'detail-note-disappear':'detail-note-show' }>
                        <div className = 'detail-note-title'
                            dangerouslySetInnerHTML = {{ __html : marked(htmlTitle) }}
                        >
                        </div>
                        <div 
                            className='detail-note-body' 
                            dangerouslySetInnerHTML = {{ __html : marked(htmlContext) }}
                        >
                        </div>
                    </div>
                </Col>
                <Col xs={ 0 }  sm={ 0 }  md={ 6 } lg={ 6 } xl={ 6 }  xxl={ 6 }>
                    <div id="detailed-nav">
                        <div className="nav-tiitle">笔记导航</div>
                        { tocify && tocify.render() }
                    </div>
                    <Share />
                </Col>
            </Row>
        );
    }

    return (
        <Fragment>
            {
                articleId.length === 0
                    ? <Empty emptyTitle = "目前还未选择笔记呢" />
                    : getDetailNote()
            }
        </Fragment>
    )
}

export default DetailNote;