import React from 'react';
import './homefooter.scss';
function HomeFooter(){
    return (
        <div id = "home-footer-main-div">
            <p className = "common-small-text">邵莲的博客</p>
            <p className = "common-small-text">&copy;2020 Powered by <a href="https://reactjs.org/">React</a></p>
            <p className = "common-small-text">
                互联网ICP备案：
                <a href="http://www.beian.miit.gov.cn/">闽ICP备19026659号-2</a>
            </p>
        </div>
    );
}

export default HomeFooter;