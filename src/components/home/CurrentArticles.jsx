import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CONSTURL from '../../config/apiUrl';
import { Link } from 'react-router-dom';
import '../../style/commponent/currentArticles.css';
function CurrentArticles(){

    const [ initial, setInitial ] = useState(false);
    const [ articleList, setArticleList ] = useState([]);

    useEffect(()=>{
        if( initial === false ){
            _loadArticleList();    
        }
        setInitial(true);
    },[ initial ]);

    const _loadArticleList = ()=>{
        Axios({
            url: CONSTURL.GET_ARTICLES_BY_PARAMS,
            withCredentials: true
        })
        .then((res)=>{
            console.log(res);
            setArticleList(res.data.infos.list);
        },()=>{
            setInitial(false);
        })
    }

    return(
        <div className="index-currenta-main-div">
            <ul className="index-currenta-ul">
                <p className="index-currenta-title">最近文章</p>
                {
                    articleList.map((item, index) => {
                        return(
                            <Link
                                key = { item.id+index } 
                                to = { "/note/detail?id="+item.id }
                            >
                                <li className="index-currenta-li" >
                                    <p className="index-currenta-li-tagName">{ item.tagName }</p>
                                    <p className="index-currenta-li-title">{ item.title }</p>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    );
}


export default CurrentArticles;