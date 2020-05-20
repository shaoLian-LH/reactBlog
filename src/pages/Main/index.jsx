import React, { Fragment } from 'react';
import PathConfig from '../../config/PathConfig';
import { BrowserRouter as BRouter, Route} from 'react-router-dom';
import HeaderNav from '../../components/home/HeaderNav';
import MyTitle from '../../components/otherComponents/CustomerTitle';
import Table from '../../components/home/Table';
import MainMenu from '../../components/otherComponents/MainMenu';
import './main.scss';
import { Row } from 'antd';

function Main(){
    return (
        <Fragment>
            <HeaderNav/>
            <Table />
            <Row>
                <MyTitle title="邵莲的博客" />
                <div id="blog-main-index-div">
                    <BRouter baseName="/blog">
                        {
                            PathConfig.map((value, index) => {
                                return (
                                    <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                );
                            })
                        }
                        <MainMenu />
                    </BRouter>
                </div>
            </Row>
        </Fragment>
    )
}

export default Main;