import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/commponent/common.css';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
