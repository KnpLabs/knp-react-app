import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Card from './index'
import State from '../../Redux/State/Card'
import { addCard } from '../../Redux/State/Card/Card'
import TestRenderer from 'react-test-renderer'

describe('Component :: Card :: index', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('New card form not present when mount and displays it when click on button', () => {
    const inspector = TestRenderer.create(createElement(store, Card));

    expect(store.getState().Card.isCreating).toBe(false);

    store.dispatch(addCard());

    expect(store.getState().Card.isCreating).toBe(true);

    inspector.root.findByProps({ id: 'title_form' });
  });
})

const createElement = (store, component) =>
    <Provider store={store}>
      {React.createElement(component)}
    </Provider>
