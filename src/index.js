import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './static/style/global.scss';
import Main from './pages/Main';

ReactDOM.render(<Main />, document.getElementById('root'));
