import React from 'react';
import PadCarousel from '../../components/home/PadCarousel';
import NoteBook from '../../components/home/NoteBook';
import HomeFooter from '../../components/home/HomeFooter';
import TypeWriterPaper from '../../components/home/TypeWriterPaper';
import './home.scss';
import { Row, Col } from 'antd';
function Home(){
    return (
        <div id="home-main-div">
            <Row justify="start">
                <Col xs={ 0 }  sm={ 24 }  md={ 24 } lg={ 24 } xl={ 24 }  xxl={ 24 }>
                    <PadCarousel />
                    <TypeWriterPaper />
                    <NoteBook />
                </Col>
                <Col xs={ 24 }  sm={ 0 }  md={ 0 } lg={ 0 } xl={ 0 }  xxl={ 0 }>
                    <PadCarousel />
                    <NoteBook />
                </Col>
                <HomeFooter />
            </Row>
        </div>
    )
}
export default Home;