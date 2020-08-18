import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css'

import Pizza from './components/pizza'

ReactDOM.render(<Pizza />, document.getElementById('root'));
serviceWorker.unregister();
