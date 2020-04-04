import React, { useState, Fragment, useEffect, createContext } from 'react';
import PathConfig from '../config/pathConfig';
import Loading from '../components/otherComponents/Loading'
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import HomeFooter from '../components/home/HomeFooter';
import MyTitle from '../components/otherComponents/CustomerTitle';
import '../style/pages/main.css';
import { Row, Col } from 'antd';
export const mainContext = createContext(null);
function Main(){
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(()=>{
        if( isLoading ){
            setIsLoading(false)
        }
    },[ isLoading ])

    return (
        <Fragment>
            <Row>
                <Col xs={ 0 }  sm={ 24 }  md={ 24 } lg={ 24 } xl={ 24 }  xxl={ 24 }>
                    <div id="blog-main-index-div">
                        <MyTitle title="邵莲的博客" />
                        <mainContext.Provider>
                            <BRouter>
                                {
                                    isLoading?<Loading />:''
                                }
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
            <HomeFooter />
        </Fragment>
    )
}

export default Main;