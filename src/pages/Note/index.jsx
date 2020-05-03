import React, { Fragment, createContext, useState, useEffect } from 'react';
import MyTitle from '../../components/otherComponents/CustomerTitle';
import './noetForPhone.scss';
import './note.scss';
import CommonNoteList from '../../components/noteList/CommonNoteList';
import DetailNote from '../../components/noteList/DetailNote';
import { Row, Col, Breadcrumb, BackTop } from 'antd';
import { useLocation } from 'react-router-dom';  
import BackIndexBtn from '../../components/otherComponents/BackIndexBtn';
import { HomeOutlined, FileSearchOutlined, FileTextOutlined } from '@ant-design/icons';
export const NoteArticleContext = createContext(null);
function Note(){

    const [ articleId, setArticleId ] = useState('');
    const [ isChanged, setIsChanged ] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        if(location.search.indexOf("detail") !== -1){
            let id = location.search.split("&")[1].split("=")[1]
            setArticleId(id);
        }
        // eslint-disable-next-line
    },[ articleId])
    const getBread = ()=>{
        return (
            <Breadcrumb>
            <Breadcrumb.Item 
                href='/blog' 
                onClick={ ()=>{ if(isChanged){ setIsChanged(false) } } }>
                <HomeOutlined /> 首页
            </Breadcrumb.Item>
            <Breadcrumb.Item 
                href='/blog/note' >
                <FileSearchOutlined /> 笔记栏
            </Breadcrumb.Item>
            {
                articleId.length !== 0
                ?(
                    <Breadcrumb.Item 
                        href={ '/note/detail?id='+articleId  }
                        onClick={ ()=>{ if(isChanged){ setIsChanged(false) } } }>
                        <FileTextOutlined /> 笔记
                    </Breadcrumb.Item>
                )
                :''
            }
        </Breadcrumb>
        )
    }
    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <NoteArticleContext.Provider 
                value = {{
                    "articleId": articleId,
                    "setArticleId": setArticleId,
                    "isChanged": isChanged,
                    "setIsChanged": setIsChanged,
                }}
            >
                <div id="note-main-div">
                    <Row 
                        justify="center">
                        <Col xs={ 0 }  sm={ 2 }  md={ 2 } lg={ 2 } xl={ 2 }  xxl={ 2 }>
                            <BackIndexBtn />
                        </Col>
                        <Col xs={ 0 }  sm={ 7 }  md={ 7 } lg={ 7 } xl={ 7 }  xxl={ 7 }>
                            <CommonNoteList />
                        </Col>
                        <Col xs={ 0 }  sm={ 15 }  md={ 15 } lg={ 15 } xl={ 15 }  xxl={ 15 }>
                            <DetailNote />
                        </Col>
                        <Col xs={ 24 }  sm={ 0 }  md={ 0 } lg={ 0 } xl={ 0 }  xxl={ 0 }>
                            <div className = "bread-main-div">
                                {
                                    getBread()
                                }
                            </div>
                            <CommonNoteList />
                            <DetailNote />
                            <BackTop />
                        </Col>
                    </Row>
                </div>
            </NoteArticleContext.Provider>
        </Fragment>
    );
}

export default Note;