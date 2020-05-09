import React, { useEffect, useState } from 'react';
import './table.scss';
import $ from 'jquery/dist/jquery';
function Table(){

    const [ isInitial, setIsInitial ] = useState(false);


    useEffect(()=>{
        if( !isInitial ){
            setIsInitial(true);
            getUl();
        }
        window.addEventListener('resize',()=>{
            getUl();
        });
        return (()=>{
            window.removeEventListener('resize');
        })
        // eslint-disable-next-line
    },[ ])

    const getUl=()=>{
        let curWidth = document.documentElement.clientWidth;
        let num = (curWidth - 100) / 45;
        $('.table-ul').empty();
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