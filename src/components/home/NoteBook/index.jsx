import React from 'react';
import { Link } from 'react-router-dom';
import './notebook.scss';
function NoteBook(){
    return (
        <div id = "notebook-main-div">
            <Link
                key = "notebook" 
                to = "/blog/note"
            >
                <div id="book">
                    <div className = "cover">
                        <h2><span>Note</span> Book</h2>
                    </div>
                    <div className = "writer">
                        written by <b>shaoLian</b>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default NoteBook;