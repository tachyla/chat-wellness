import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import './index.css';

ReactDOM.render(
    <Card/>,
    document.getElementById('root')
);

require ("../server/server.js");
