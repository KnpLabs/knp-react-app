import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Dog from './index'
import State from '../../Redux/State'
import { receiveDog } from '../../Redux/State/Dog'
import TestRenderer from 'react-test-renderer'

describe('Component :: Dog :: index', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('fetches a dog when mount and displays it when receive a dog', () => {
    TestRenderer.create(createElement(store, Dog));

    expect(store.getState().Dog.isGenerating).toBe(true);

    store.dispatch(receiveDog({ src: 'foo.com', alt: 'Wouf' }));

    expect(store.getState().Dog.isGenerating).toBe(false);

    const inspector = TestRenderer.create(createElement(store, Dog));

    inspector.root.findByProps({ className: 'dog' });
  });
})

const createElement = (store, component) =>
  <Provider store={store}>
    {React.createElement(component)}
  </Provider>
