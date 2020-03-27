import React, { Fragment } from 'react';
import MyTitle from '../components/otherComponents/CustomerTitle';
import '../style/pages/note.css'
import CommonNoteList from '../components/noteList/CommonNoteList';
import DetailNote from '../components/noteList/DetailNote';
import { Route } from 'react-router-dom';

function Note(){

    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <div>
                {/* 根据路由确定渲染页面内容，分别是笔记列表（标题、分类和简介）和笔记详细内容 */}
                <Route key="commonList" path="/note" exact={true} component={ CommonNoteList } />
                <Route key="detailNote" path="/note/detail" exact={false} component={ DetailNote } />
            </div>
        </Fragment>
    );
}

export default Note;