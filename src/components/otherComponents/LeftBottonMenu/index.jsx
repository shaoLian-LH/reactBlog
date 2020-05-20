import React, { useEffect, useContext } from 'react';
import LeftBottonItem from './LeftBottonItem';
import './leftBottomMenu.scss';
import { FileSearchOutlined, CommentOutlined } from '@ant-design/icons';
import { NoteArticleContext } from '../../../pages/Note';

function LeftBottonMenu(){
    const ctx = useContext(NoteArticleContext);
    useEffect(()=>{
        
    },[ ctx ])
    return (
        <div id = "left-botton-menu-main-div">
            <LeftBottonItem />
            <LeftBottonItem 
                target = { ctx.articleId !== '' ? `/blog/note?detail&id=${ ctx.articleId }` :"/blog/note" } 
                title = { "笔记列表" } 
                icon = { <FileSearchOutlined /> } 
                onClick = { ()=>{ if( ctx.wantComment ){ ctx.setWantComment(false) } } }
            />
            <LeftBottonItem 
                target = { ctx.articleId !== '' ? `/blog/note/comment?id=${ ctx.articleId }`:"/blog/note/comment" } 
                title = { "评论" } 
                icon = { <CommentOutlined /> } 
                onClick = { ()=>{ if( !ctx.wantComment ){ ctx.setWantComment(true) } } }
            />
        </div>
    )
}

export default LeftBottonMenu;