import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Main.css';
import App from './Component/App';
import registerServiceWorker from './ServiceWorker';
import { applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Store } from './Redux/Store'
import rootEpic from './Epic'
import reducer from './Redux/State'

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    fetchDog: () => fetch('https://dog.ceo/api/breeds/image/random')
  },
});
const middleware     = applyMiddleware(epicMiddleware);
const store          = Store(reducer(), middleware, reducer)

epicMiddleware.run(rootEpic);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
