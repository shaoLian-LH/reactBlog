import React from 'react';
import '../../style/commponent/common.css';

function HomeFooter(){
    return (
        <div className = "common-center">
            <p className = "common-small-text">邵莲的个人博客</p>
            <p className = "common-small-text">&copy;2020 Powered by reactjs</p>
            <p className = "common-small-text">
                互联网ICP备案：
                <a href="http://www.beian.miit.gov.cn/">闽ICP备19026659号</a>
            </p>
        </div>
    );
}

export default HomeFooter;