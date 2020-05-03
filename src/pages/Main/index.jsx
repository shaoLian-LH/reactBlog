import React, { Fragment, createContext} from 'react';
import PathConfig from '../../config/PathConfig';
import { BrowserRouter as BRouter, Route} from 'react-router-dom';
import HeaderNav from '../../components/home/HeaderNav';
import MyTitle from '../../components/otherComponents/CustomerTitle';
import Table from '../../components/home/Table';
import './main.scss';
import { Row, Col } from 'antd';
export const mainContext = createContext(null);
function Main(){
    return (
        <Fragment>
            <HeaderNav/>
            <Table />
            <Row>
                <MyTitle title="邵莲的博客" />
                <Col xs={ 24 }  sm={ 24 }  md={ 24 } lg={ 24 } xl={ 24 }  xxl={ 24 }>
                    <div id="blog-main-index-div">
                        <mainContext.Provider>
                            <BRouter baseName="/blog">
                                {
                                    PathConfig.map((value, index) => {
                                        return (
                                            <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                        );
                                    })
                                }
                            </BRouter>
                        </mainContext.Provider>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Main;