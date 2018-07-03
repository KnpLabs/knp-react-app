import React from 'react'
import { Provider } from 'react-redux'
import { Store } from '../Redux/Store'
import Dummy from './Container/Dummy'

export default ({
  store = Store,
}) =>
  <Provider store={store}>
    <div>
      <h1>Hello, World!</h1>
      {Dummy}
    </div>
  </Provider>
