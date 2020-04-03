import React, { useState,useEffect  } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../../style/commponent/listNav/pageNav.css';

// 页表组件，需要传入pageList与handleClick
function PageNav( props ){

    const [ pageList, setPageList ] = useState({});
    
    useEffect(()=>{
        setPageList(props.pageList);
    }, [ props ]);

    const getList = () =>{
        let liArr = [];
        // 查空
        if( pageList.list === undefined || pageList.list === null || pageList.list.length === 0 ){
            return liArr;
        }

        let length = pageList.pages-0;
        let isFirstPage = pageList.isFirstPage;
        let isLastPage = pageList.isLastPage;
        let pageNum = pageList.pageNum;
        if(!isFirstPage){
            let newLi = (<li key={"poiPre"} className = "textLi" onClick = { ()=>{ props.handleClick("pre") } }><LeftOutlined /></li>);
            liArr.push(newLi);
        }
        for( let i = 0 ; i < length ; i++ ){
            if(i < 3 && i !== (length-1)){
                let newLi = (<li key={ (i+1) } className = { pageNum===(i+1)?'currentLi disabled':'commonLi' } onClick = { ()=>{ props.handleClick((i+1)) } }>{(i+1)}</li>);
                liArr.push(newLi);
            }
            if( i===3 ){
                let newLi = (<li key={ (i+1) } className = "disabled">...</li>);
                liArr.push(newLi);
            }
            if( i === (length -1)){
            let newLi = (<li key={ (i+1) } className = { pageNum===(i+1)?'currentLi disabled':'commonLi' }  onClick = { ()=>{ props.handleClick((i+1)) } }>{(i+1)}</li>);
                liArr.push(newLi);
            }
        }
        if(!isLastPage){
            let newLi = (<li key={"poiNext"} className = "textLi" onClick = { ()=>{ props.handleClick("next") } }><RightOutlined /></li>);
            liArr.push(newLi);
        }
        return liArr;
    }

    return (
        <div className="pageDiv">
            <ul className = "pageUl">    
                {
                    getList()
                }
            </ul>
        </div>
    );
}

export default PageNav;