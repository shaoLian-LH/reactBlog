import React, { Fragment } from 'react';
import HomeFooter from '../components/home/HomeFooter';
import MainMenu from '../components/MainMenu';
import HeaderNav from '../components/home/HeaderNav';
import '../style/commponent/common.css';
import '../style/pages/home.css';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import { Row, Col, BackTop } from 'antd';
import PathConfig from '../config/pathConfig';
import MyTitle from '../components/otherComponents/CustomerTitle';


function Home() {

    return (
        <Fragment>
            <MyTitle title="邵莲的博客" />
            <div className="topicBackgroundColor">
                <BRouter>
                    <Row
                        type = "flex" 
                        justify = "center" 
                    >
                        <Col xs={0} sm={0} md = {0} lg={18} xl={18} xxl={18}>
                                <HeaderNav />
                        </Col>
                    </Row>
                    <Row
                        type="flex"
                        justify="center" >
                        <Col
                            className="center-box" xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                            <MainMenu />
                            {
                                PathConfig.map((value, index) => {
                                    return (
                                        <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                    );
                                })
                            }
                            
                        </Col>
                    </Row>
                    <BackTop />
                </BRouter>
                <HomeFooter />
            </div>
        </Fragment>
    )
}
export default Home;