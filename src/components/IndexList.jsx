import React, { useEffect, useState, useContext } from 'react';
import '../style/commponent/common.css';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { FetchesContext } from '../pages/Home';
import axios from 'axios';
import { RequestALLArticles, ReceiveAticlesInfos } from '../store/action';
import CONSTURL from '../config/apiUrl';

function IndexList(){

    const ctx = useContext(FetchesContext);
    const [reFetch]=useState(false);

    useEffect(()=>{
        ctx.dispatch(RequestALLArticles());
        let url = CONSTURL.GET_ALL_ARTICLE + 1;
        axios
        .get(url)
        .then(res => {
            ctx.dispatch(ReceiveAticlesInfos(res));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reFetch])

    return (
        <div>
            <List 
                header = { <div>最新日志</div> } 
                itemLayout = "vertical" 
                dataSource = { ctx.list } 
                renderItem = { item => ( 
                    <List.Item>
                        <div className="article-title">
                          <Link 
                            href = {{ pathname:'/', query: { id: item.id } }}
                          >{ item }</Link>
                        </div>
                        <div className = "article-icon">
                            
                        </div>
                        <div 
                            className="article-introduce"
                        >
                        </div> 
                    </List.Item>
                ) }
            />
        </div>
    )
}

export default IndexList;