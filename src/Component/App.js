import React from 'react'
import { Provider } from 'react-redux'
import Dog from './Dog'

export default ({
  store,
}) =>
  <Provider store={store}>
    <div>
      <h1>Welcome</h1>
      <p>This is a simple Dog fetcher app bootstrapped with knp-react-app</p>
      <Dog />
    </div>
  </Provider>
