import React, { useEffect, useState } from 'react';
import { useInterval } from '../../otherComponents/useInterval';
import './typeWriterPaper.scss';
import $ from 'jquery';
function TypeWriterPaper(){

    const [ isInitial, changeIsInitial ] = useState(false);
    const [ final, changeFinal ] = useState(false);
    let words = ["Welcome to my blog","Click the note book","Search what you want"];
    let flag, part, i = 0, offset = 0, len = words.length, skip_count=0,skip_delay=5, speed = 100;    
    
    useInterval(function(){
        if( i < len ){
            offset++;
            if(offset >= words[i].length){
                $('#word-text').text(words[i]);
                skip_count++;
                if( skip_count === skip_delay ){
                    $('#word-text').text('');
                    let newWord = $('<p>'+words[i]+'</p>');
                    $('#word-show').append(newWord);
                    offset = 0;
                    skip_count = 0;
                    i++;
                }
            } else {
                part = words[i].substr(0, offset);
                $('#word-text').text(part);
            }   
        } else {
            changeFinal(true);
        }
    }, speed);

    useEffect(()=>{
        if(!isInitial){
            changeIsInitial(true);
        }
        if(final){
            clearInterval(flag);
        }
        // eslint-disable-next-line
    },[ isInitial, final ])


    return (
        <div id="welcome-pepar-main-div">
            <div id="word"><div id="word-show"></div><p id="word-text"></p></div>
        </div>
    )
}

export default TypeWriterPaper;
