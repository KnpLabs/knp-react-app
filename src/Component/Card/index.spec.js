import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Actions from './index'
import State from '../../Redux/State'
import Todo, {openRemoveConfirmation} from '../../Redux/State/Todo/Todo'
import TestRenderer from 'react-test-renderer'

describe('Component :: Card :: index', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('openRemoveConfirmation has been called when click on remove button', () => {
    TestRenderer.create(createElement(store, Actions));
    const spy = spyOn(Todo, 'openRemoveConfirmation')

    store.dispatch(openRemoveConfirmation());
    expect(spy).toHaveBeenCalled()
  });
})

const createElement = (store, component) =>
    <Provider store={store}>
      {React.createElement(component)}
    </Provider>
