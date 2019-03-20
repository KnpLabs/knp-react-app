import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Actions from './index'
import State from '../../Redux/State'
import Todo from '../../Redux/State/Todo/Todo'
import TestRenderer from 'react-test-renderer'

describe('Component :: Actions :: index', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('AddCart has been called when click on add button', () => {
    const inspector = TestRenderer.create(createElement(store, Actions));
    const spy = spyOn(Todo, 'addCard')
      console.warn(Todo)
    store.dispatch(Todo.addCard());
    expect(spy).toHaveBeenCalled()
    expect(() => inspector.root.findByProps({ id: 'title_form' })).not.toThrow()
  });
})

const createElement = (store, component) =>
    <Provider store={store}>
      {React.createElement(component)}
    </Provider>
