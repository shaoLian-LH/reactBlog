import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/commponent/common.css';
import Home from './pages/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
