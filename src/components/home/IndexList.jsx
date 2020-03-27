import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../../style/commponent/common.css';
import '../../style/commponent/indexList.css';
import '../../style/pages/home.css';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import Axios from 'axios';
import CONSTURL from '../../config/apiUrl';
// 首页列表
function IndexList(){

    const [ isInitial, setIsInitial ] = useState(false);
    const [ bannerList, setBannerList ] = useState([]);


    useEffect(()=>{
        if(isInitial === false){
            loadBannerInfos();
            setIsInitial(true);    
        }
    },[ isInitial ])

    const loadBannerInfos = ()=>{
        Axios({
            url: CONSTURL.GET_ALL_BANNERS,
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data.banners)
            setBannerList(res.data.banners);
        })
    }


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

    const getCarouselChilds = ()=>{
        return bannerList.map((item)=>{
            return (
                <Link
                    key = { item.articleId } 
                    to = { "/note/detail?id="+item.articleId } 
                >
                    <div className="index-banner-div" >
                        <img className="index-banner-img" src={  item.imgName!==undefined?CONSTURL.SOURCE_PRE+item.imgName:'../../image/cat.png' } alt = { "图没了" } />
                        <p className="index-banner-p">{ item.title }</p>                                
                    </div>
                </Link>
            )
       });
    }
    return (
        <div className = "index-main-div">
            <div className = "index-top-div">
                <Row justify="center">
                    <Col xs={ 16 }  sm={ 16 }  md={ 12 } lg={ 12 } xl={ 12 }  xxl={ 10 }> 
                        <Carousel
                            effect = "scrollx" 
                            autoplay = { true } 
                        >
                            {
                                getCarouselChilds()
                            }
                        </Carousel>
                    </Col>
                    <Col xs={ 0 }  sm={ 0 }  md={ 8 } lg={ 8 } xl={ 8 }  xxl={ 7 }> 
                        <div >

                        </div>
                    </Col>
                </Row>
            </div>
            <div className = "idnex-bottom-div">
                
            </div>
        </div>
    )
}

export default IndexList;