import React from 'react'
import { Provider } from 'react-redux'
import Card from './Card'

export default ({
  store,
}) =>
  <Provider store={store}>
    <div>
      <h1>Welcome</h1>
      <p>This is a awesome TODO application app bootstrapped with knp-react-app</p>
      <Card/>
    </div>
  </Provider>
