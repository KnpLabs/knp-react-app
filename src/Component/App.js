import React from 'react'
import { Provider } from 'react-redux'
import Dog from './Container/Dog'

export default ({
  store, }) =>
  <Provider store={store}>
    <div>
      <h1>Welcome</h1>
      <p>This is a standard page</p>
      <Dog />
    </div>
  </Provider>
