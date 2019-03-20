import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Form from './index'
import State from '../../Redux/State'
import { setTitle } from '../../Redux/State/Todo/Todo'
import TestRenderer from 'react-test-renderer'

describe('Component :: Form :: index', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('SetTitle has been called when user add text into input title_form', () => {
    TestRenderer.create(createElement(store, Form));
    const spy = spyOn(store.dispatch, 'setTitle')

    store.dispatch(setTitle('test'));

    expect(spy).toHaveBeenCalled()
  });
})

const createElement = (store, component) =>
    <Provider store={store}>
      {React.createElement(component)}
    </Provider>
