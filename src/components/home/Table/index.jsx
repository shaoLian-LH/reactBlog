import React, { useEffect } from 'react';
import './table.scss';
import $ from 'jquery/dist/jquery';
function Table(props){

    useEffect(()=>{
        getUl()
        console.log(1)
    },[props])

    const getUl=()=>{
        let curWidth = document.documentElement.clientWidth;
        let num = (curWidth - 100) / 45;
        for ( let i = 0; i < num; i++ ){
            let newLi = $("<li>");
            newLi.addClass('table-li');
            $('.table-ul').append(newLi);
        }
    }

    return (
        <div id = "table-main-div">
            <ul className="table-ul"></ul>
        </div>
    )

}

export default Table;