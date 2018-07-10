import React from 'react'
import { Provider } from 'react-redux'
import Dog from './Dog'
import State from '../../Redux/State'
import { receiveDog } from '../../Redux/State/Dog'
import { Store } from '../../Redux/Store'
import TestRenderer from 'react-test-renderer'

describe('Component :: Container :: Dog', () => {
  let store;

  beforeEach(() => {
    store = Store(State(), undefined, State);
  });

  it('fetches a dog when mount and displays it when receive a dog', () => {
    const inspector = TestRenderer.create(createContainer(store)(Dog));

    expect(store.getState().Dog.isGenerating).toBe(true);

    store.dispatch(receiveDog({ src: 'foo.com', alt: 'Wouf' }));

    inspector.update(createContainer(store)(Dog))

    inspector.root.findByProps({ className: 'dog' });
  });
})

const createContainer = store => component =>
  <Provider store={store}>
    {React.createElement(component)}
  </Provider>
