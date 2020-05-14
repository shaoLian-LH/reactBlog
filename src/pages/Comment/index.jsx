import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './comment.scss';
import Request from '../../config/Request';
import CONSTURL from '../../config/apiUrl';
import { message } from 'antd';
import Empty from '../../components/otherComponents/Empty';
import CommentCard from '../../components/comment/CommentCard';
import Masonry from 'react-masonry-component';
import AddComment from '../../components/otherComponents/AddComment';

function Comment(){

    const [ isInitial, changeIsInitial ] = useState(false);
    const [ commentList, setCommentList ] = useState([]);
    useEffect(()=>{
        if(!isInitial){
            changeIsInitial(true);
            fetchComments();
        }
    },[ isInitial ])

    const fetchComments = ()=>{
        Request.get(CONSTURL.COMMENTS_OPERATION+"/0")
        .then((res)=>{
            let data = res.data;
            setCommentList(data.comments);
        },(error)=>{
            console.log(error)
            message.error("拉取评论信息失败")
        })
    }

    const masonryOptios = {
        columnWidth: document.body.clientWidth < 1920 ?180:220,
        gutter: 30,
        fitWidth: true,
        itemSelector: ".common-card-main-div"
    };

    return (
        <Fragment>
            <Link title = "返回首页" key = "comment-back-home" className = "comment-back-home-arrow-div" to="/blog">
                <span className = "comment-back-home-arrow"></span>
            </Link>
            <div id = "comment-main-div">
                <div className = "comment-content-wrap-div">
                    <div className = "comment-content-main-div">
                        <Masonry className={ 'comment-detail-content-div' } elementType={'div'} options={ masonryOptios } >
                        {
                            commentList.length === 0?<Empty />:commentList.map((item,index)=>{
                                return (
                                    <CommentCard 
                                        key = { item.id } 
                                        author = { item.author } 
                                        time = { item.addTime } 
                                        content = { item.content } 
                                        email = { item.email }
                                    />
                                )
                            })
                        }
                        </Masonry>
                    </div>
                </div>
            </div>
            <AddComment className = "comment-page-component" />
        </Fragment>
    )
}

export default Comment;