import React, { Fragment } from 'react';
import MyTitle from '../components/CustomerTitle';

function Note(){
    return (
        <Fragment>
            <MyTitle title="邵莲的笔记" />
            <div>
                Note
            </div>
        </Fragment>
    );
}

export default Note;