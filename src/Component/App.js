import React from 'react'
import { Provider } from 'react-redux'
import Dummy from './Container/Dummy'

export default ({
  store,
}) =>
  <Provider store={store}>
    <div>
      <h1>Hello, World!</h1>
      <Dummy />
    </div>
  </Provider>
