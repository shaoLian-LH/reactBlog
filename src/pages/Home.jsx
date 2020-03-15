import React, { Fragment, useReducer } from 'react';
import HomeFooter from '../components/HomeFooter';
import MainMenu from '../components/MainMenu';
import HeaderNav from '../components/HeaderNav';
import '../style/commponent/common.css';
import '../style/pages/home.css';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import { Row, Col , Affix} from 'antd';
import PathConfig from '../config/pathConfig';
import MyTitle from '../components/CustomerTitle';
import { fetchReducer } from '../store/reducer';

// 创建上下文并暴露
export const FetchesContext = React.createContext(null);

function Home(){
    //第二个参数为state的初始状态
    const [fetchesState, fetchDispatch] = useReducer(fetchReducer, {
        isFetching: false,
        list: []
    });
    return (
       <FetchesContext.Provider
            value = {{fetchesState, dispatch:fetchDispatch}}
       >
            <Fragment>
            <MyTitle title="邵莲的博客" />
            <div className = "topicBackgroundColor">
            <HeaderNav />
            <div className="drop-shadow"></div>
                <BRouter>
                    <Row 
                        type="flex"
                        justify="center" >
                        <Col 
                            className = "center-box big-in-test" xs={ 24 }  sm={ 24 }  md={ 18 } lg={ 18 } xl={ 18 }  xxl={ 18 }>
                            <Affix>
                                <MainMenu />
                            </Affix>
                            {
                                PathConfig.map((value, index) => {
                                    return (
                                        <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </BRouter>
                <HomeFooter />
            </div>
            </Fragment>
       </FetchesContext.Provider>
    )
}



export default Home;