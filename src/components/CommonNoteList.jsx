import React from 'react';
import NoteList from '../components/NoteList';
import TagNav from '../components/TagNav';
import { Row, Col } from 'antd';

function CommonNoteList(){
    return(
        <Row 
            type="flex"
            justify="center" >
            <Col xs={ 24 }  sm={ 24 }  md={ 16 } lg={ 16 } xl={ 16 }  xxl={ 16 }>
                <div id="leftDiv">
                    <NoteList />
                </div>
            </Col>
            <Col xs={ 0 }  sm={ 0 }  md={ 6 } lg={ 6 } xl={ 6 }  xxl={ 6 }>
                <div id="rightDiv">
                    <TagNav />
                </div>
            </Col>
        </Row>
    )
}
export default CommonNoteList;