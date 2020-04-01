import React, { useState, Fragment, useEffect } from 'react';
import PathConfig from '../config/pathConfig';
import Loading from '../components/otherComponents/Loading'
import { BrowserRouter as BRouter, Route } from 'react-router-dom';
import HomeFooter from '../components/home/HomeFooter';
import MyTitle from '../components/otherComponents/CustomerTitle';
import '../style/pages/main.css';
function Main(){
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(()=>{
        if( isLoading ){
            setIsLoading(true)
        }
    },[ isLoading ])

    return (
        <Fragment>
                <div id="blog-main-index-div">
                    <MyTitle title="邵莲的博客" />
                    <BRouter>
                        {
                            isLoading?<Loading />:PathConfig.map((value, index) => {
                                return (
                                    <Route key={index * index + index} path={value.path} exact={value.exact} component={value.component} />
                                );
                            })
                        }
                    </BRouter>
                    
                </div>
            <HomeFooter />
        </Fragment>
    )
}

export default Main;