import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import registerServiceWorker from './ServiceWorker';
import { StoreWithEpic } from './Redux/Store'
import epic from './Epic'
import reducer from './Redux/Module'

const store = StoreWithEpic({}, epic, reducer)
ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
