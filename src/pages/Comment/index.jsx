import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './comment.scss';
import CommentBoard from '../../components/comment/CommentBoard';
import AddComment from '../../components/comment/AddComment';

function Comment(){
    
    return (
        <Fragment>
            <Link title = "返回首页" key = "comment-back-home" className = "comment-back-home-arrow-div" to="/blog">
                <span className = "comment-back-home-arrow"></span>
            </Link>
            <CommentBoard targetArticle = { 0 }/>
            <AddComment className = "comment-page-component" />
        </Fragment>
    )
}

export default Comment;