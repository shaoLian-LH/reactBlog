import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import '../../style/commponent/home/carousel.css';
import Axios from 'axios';
import CONSTURL from '../../config/apiUrl';
// pad滚动列表
function PadCarousel(){

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
            setBannerList(res.data.banners);
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