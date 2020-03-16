import React, { Fragment } from 'react';
import MyTitle from '../components/CustomerTitle';
import '../style/pages/note.css'
import { Row, Col } from 'antd';

function Note(){
    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <div>
            <Row 
                type="flex"
                justify="center" >
                <Col xs={ 24 }  sm={ 24 }  md={ 18 } lg={ 18 } xl={ 18 }  xxl={ 18 }>
                    <div id="leftDiv">

                    </div>
                </Col>
                <Col xs={ 0 }  sm={ 0 }  md={ 6 } lg={ 6 } xl={ 6 }  xxl={ 6 }>
                    <div id="rightDiv">

                    </div>
                </Col>
            </Row>
            </div>
        </Fragment>
    );
}

export default Note;