import React, { Fragment, createContext, useState, useEffect } from 'react';
import MyTitle from '../components/otherComponents/CustomerTitle';
import '../style/pages/note.css'
import CommonNoteList from '../components/noteList/CommonNoteList';
import DetailNote from '../components/noteList/DetailNote';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';  
import BackIndexBtn from '../components/otherComponents/BackIndexBtn';
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
                    <Col xs={ 0 }  sm={ 2 }  md={ 2 } lg={ 2 } xl={ 2 }  xxl={ 2 }>
                        <BackIndexBtn />
                    </Col>
                    <NoteArticleContext.Provider
                        value = {{
                            "articleId": articleId,
                            "setArticleId": setArticleId
                        }}
                    >
                        <Col xs={ 0 }  sm={ 7 }  md={ 7 } lg={ 7 } xl={ 7 }  xxl={ 7 }>
                            <CommonNoteList />
                        </Col>
                        <Col xs={ 0 }  sm={ 15 }  md={ 15 } lg={ 15 } xl={ 15 }  xxl={ 15 }>
                            <DetailNote />
                        </Col>
                    </NoteArticleContext.Provider>
                </Row>
            </div>
        </Fragment>
    );
}

export default Note;