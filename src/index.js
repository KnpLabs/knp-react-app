import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Main.css';
import App from './Component/App';
import registerServiceWorker from './ServiceWorker';
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './Epic/Card'
import { default as mainReducer, debug } from './Redux/State/Card'

const epicMiddleware = createEpicMiddleware();
const middleware     = applyMiddleware(epicMiddleware);
const reducer        = Number(process.env.REACT_APP_DEBUG_STATE)
  ? debug(mainReducer)
  : mainReducer;
const store          = createStore(reducer, reducer(), middleware);

epicMiddleware.run(rootEpic);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
