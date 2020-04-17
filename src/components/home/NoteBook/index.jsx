import React from 'react';
import book from '../../../static/image/book.png';
import { Link } from 'react-router-dom';
import './notebook.scss';
function NoteBook(){
    return (
        <div id = "notebook-main-div">
            <Link
                key = "notebook" 
                to = "/note"
            >
                <img src={ book } alt="book" />
            </Link>
        </div>
    )
}

export default NoteBook;