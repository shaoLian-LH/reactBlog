import React from "react";
import cat from '../../../static/image/cat.png';
import './empty.scss';
function Empty(props){
  return(
    <div className = "empty-div">
      <img src={ props.emptyImg !==undefined?props.emptyImg:cat } alt=""/>
      <p className = "empty-p">{ props.emptyTitle !== undefined?props.emptyTitle:'没有任何数据呢' }</p>
    </div>
  )
}
export default Empty;