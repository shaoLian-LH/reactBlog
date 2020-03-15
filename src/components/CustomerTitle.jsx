import React from 'react';
import {Helmet} from 'react-helmet';
function MyTitle(res) {
    return (
        <div>
            <Helmet>
                <title>{ res.title }</title>
            </Helmet>
        </div>
    );
}

export default MyTitle;