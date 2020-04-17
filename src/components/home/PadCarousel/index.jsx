import React, { useState, useEffect } from 'react';
import { Carousel, message } from 'antd';
import { Link } from 'react-router-dom';
import './padCarousel.scss';
import Request from '../../../config/Request';
import CONSTURL from '../../../config/Consturl';
// pad滚动列表
function PadCarousel(){

    const [ isInitial, setIsInitial ] = useState(false);
    const [ bannerList, setBannerList ] = useState([]);
    const [ tryNum, setTryNum ] = useState(0)

    useEffect(()=>{
        if(isInitial === false){
            setIsInitial(true); 
            loadBannerInfos();
        }
        // eslint-disable-next-line
    },[ isInitial ])

    const loadBannerInfos = ()=>{
        Request.get(CONSTURL.GET_ALL_BANNERS)
        .then((res)=>{
            setBannerList(res.data.banners);
        },()=>{
            setTryNum(tryNum+1)
            if( tryNum < 3 ){
                setIsInitial(false)
            } else {
                message.error("加载宣传图时出错")
            }
        })
    }


    const getCarouselChilds = ()=>{
        return bannerList.map((item)=>{
            return (
                <Link
                    key = { item.articleId } 
                    to = { "/note?detail&id="+item.articleId } 
                >
                    <div className="carousel-banner-div" >
                        <img className="carousel-banner-img" src={  item.imgName!==undefined?CONSTURL.SOURCE_PRE+item.imgName:'../../image/cat.png' } alt = { "图没了" } />
                        <p className="carousel-banner-p">{ item.title }</p>                                
                    </div>
                </Link>
            )
       });
    }
    return (
        <div id = "carousel-main-div">
            <Carousel
                effect = "scrollx" 
                autoplay = { true } 
            >
                {
                    getCarouselChilds()
                }
            </Carousel>
        </div>
    )
}

export default PadCarousel;