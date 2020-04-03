import React, { Fragment, createContext, useState, useEffect } from 'react';
import MyTitle from '../components/otherComponents/CustomerTitle';
import '../style/pages/note.css'
import CommonNoteList from '../components/noteList/CommonNoteList';
import DetailNote from '../components/noteList/DetailNote';
import { Row, Col } from 'antd';
import { HomeOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom';  
export const NoteArticleContext = createContext(null);
function Note(){

    const [ articleId, setArticleId ] = useState('');
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.indexOf("detail") !== -1){
            setArticleId(location.search.substr(4));
        }
        // eslint-disable-next-line
    },[ articleId ])

    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <div id="note-main-div">
                <Row 
                    justify="center">
                    <Col xs={ 0 }  sm={ 0 }  md={ 2 } lg={ 2 } xl={ 2 }  xxl={ 2 }>
                        <Link 
                            key = "link-to-index" 
                            to = "/"
                        >
                            <div 
                                className = "back-to-index-btn"
                                >
                                <p><HomeOutlined /></p>
                            </div>
                        </Link>
                    </Col>
                    <NoteArticleContext.Provider
                        value = {{
                            "articleId": articleId,
                            "setArticleId": setArticleId
                        }}
                    >
                        <Col xs={ 0 }  sm={ 0 }  md={ 8 } lg={ 8 } xl={ 8 }  xxl={ 8 }>
                            <CommonNoteList />
                        </Col>
                        <Col xs={ 24 }  sm={ 24 }  md={ 14 } lg={ 14 } xl={ 14 }  xxl={ 14 }>
                            <DetailNote />
                        </Col>
                    </NoteArticleContext.Provider>
                </Row>
            </div>
        </Fragment>
    );
}

export default Note;