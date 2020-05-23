import React from 'react';
import PostCardBox from '../../components/home/PostCardBox';
import PostCard from '../../components/about/PostCard';
import './about.scss';
function About(){
    return (
        <div id="about-main-div">
            <PostCardBox className = "about-post-card"/>
            <PostCard />
        </div>
    )
}
export default About;