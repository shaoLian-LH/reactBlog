import React, { useState, useEffect } from 'react';
import PadCarousel from '../../components/home/PadCarousel';
import NoteBook from '../../components/home/NoteBook';
import HomeFooter from '../../components/home/HomeFooter';
import TypeWriterPaper from '../../components/home/TypeWriterPaper';
import MessageBoard from '../../components/home/MessageBoard';
import ArticleList from '../../components/home/forPhone/ArticleList';
import './home.scss';
import { Row, Col } from 'antd';
function Home(){

    const [ isInitial, setIsInitial ] = useState(false);
    const [ isPc, setIsPc ] = useState(true);

    useEffect(()=>{
        if(!isInitial){
            setIsInitial(true);
            setView();
        }
        window.addEventListener('resize',()=>{
            setView();
        });
        return (()=>{
            window.removeEventListener('resize',()=>{});
        })
        // eslint-disable-next-line
    },[ isPc ])

    const setView = ()=>{
        let ua = navigator.userAgent;
        let isAndroid = /(?:Android)/.test(ua);
        let isFireFox = /(?:Firefox)/.test(ua);
        let isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
        let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
        let temp = !isPhone && !isAndroid;
        if(temp !== isPc){
            setIsPc(temp);
        }
    }

    return (
        <div id="home-main-div">
            <Row justify="start">
                {
                    isPc 
                    ? <Col xs={ 0 }  sm={ 24 }  md={ 24 } lg={ 24 } xl={ 24 }  xxl={ 24 }>
                        <PadCarousel />
                        <TypeWriterPaper />
                        <NoteBook />
                        <MessageBoard />
                    </Col>
                    : <Col xs={ 24 }  sm={ 0 }  md={ 0 } lg={ 0 } xl={ 0 }  xxl={ 0 }>
                        <PadCarousel />
                        <ArticleList />
                    </Col>
                }
                <HomeFooter />
            </Row>
        </div>
    )
}
export default Home;