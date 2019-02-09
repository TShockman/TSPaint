import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {createStore} from './store';
import './index.scss';

const store = createStore();

// render root
ReactDOM.render(<App store={store}/>, document.getElementById('root'));