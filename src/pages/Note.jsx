import React, { Fragment, useEffect, useContext, useState } from 'react';
import MyTitle from '../components/CustomerTitle';
import '../style/pages/note.css'
import { FetchedArticlesByParams } from '../pages/Home';
import { RequestArticleByParams, RecieveArticleByParams } from '../store/getArticlByTypeOrTitle/action';
import CONSTURL from '../config/apiUrl';
import Axios from 'axios';
import CommonNoteList from '../components/CommonNoteList';
import DetailNote from '../components/DetailNote';
import { Route } from 'react-router-dom';


function Note(props){

    const ctx = useContext(FetchedArticlesByParams);
    const [ reFetch ]=useState(ctx.fetchedArticlesState.isFetching);
    useEffect(()=>{
        if(reFetch === false){
            let str = props.location.search;
            if(str != null && str.length!==0){
                ctx.dispatch(RequestArticleByParams);
                let url = CONSTURL.GET_ARTICLES_BY_PARAMS + str;
                Axios
                .get(url)
                .then(res => {
                    ctx.dispatch(RecieveArticleByParams(res));
                });
            } else {
                ctx.dispatch(RequestArticleByParams());
                let url = CONSTURL.GET_ARTICLES_BY_PARAMS;
                Axios
                .get(url)
                .then(res => {
                    ctx.dispatch(RecieveArticleByParams(res));
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ reFetch ])


    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <div>
                <Route key="commonList" path="/note" exact={true} component={ CommonNoteList } />
                <Route key="detailNote" path="/note/detail" exact={false} component={ DetailNote } />
            </div>
        </Fragment>
    );
}

export default Note;