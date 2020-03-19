import React, { Fragment, useReducer, createContext } from 'react';
import HomeFooter from '../components/home/HomeFooter';
import MainMenu from '../components/MainMenu';
import HeaderNav from '../components/home/HeaderNav';
import '../style/commponent/common.css';
import '../style/pages/home.css';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import { Row, Col, Affix } from 'antd';
import PathConfig from '../config/pathConfig';
import MyTitle from '../components/otherComponents/CustomerTitle';
import { fetchAllArticleReducer } from '../store/getAllArticles/reducer';
import { fetchArticleByParamsReducer } from '../store/getArticlByTypeOrTitle/reducer';

// 创建上下文并暴露
export const FetchesAllArticlesContext = createContext(null);
export const FetchedArticlesByParams = createContext(null);


function Home() {
    // 在这个reducer中包含着tag集合数据
    const [fetchesAllArticlesState, fetchAllArticlesDispatch] = useReducer(fetchAllArticleReducer, {
        isFetching: false,
        articleList: []
    });
    // 此reducer负责处理查询时涉及的部分数据
    const [fetchedArticlesState, fetchArticlesDispatch] = useReducer(fetchArticleByParamsReducer, {
        isFetching: false,
        articleList: []
    });
    
    
    return (
        <FetchesAllArticlesContext.Provider
            value={{ fetchesAllArticlesState, dispatch: fetchAllArticlesDispatch }}
        >
            <Fragment>
                <MyTitle title="邵莲的博客" />
                <div className="topicBackgroundColor">
                    <HeaderNav />
                    <BRouter>
                        <Row
                            type="flex"
                            justify="center" >
                            <Col
                                className="center-box" xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                                <Affix>
                                    <MainMenu />
                                </Affix>
                                <FetchedArticlesByParams.Provider
                                    value={{ fetchedArticlesState, dispatch: fetchArticlesDispatch }}
                                >
                                    {
                                        PathConfig.map((value, index) => {
                                            return (
                                                <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                            );
                                        })
                                    }
                                </FetchedArticlesByParams.Provider>
                            </Col>
                        </Row>
                    </BRouter>
                    <HomeFooter />
                </div>
            </Fragment>
        </FetchesAllArticlesContext.Provider>
    )
}
export default Home;