import React from 'react'
import Todo from './Todo'
import TestRenderer from 'react-test-renderer'
import {createStore} from "redux";
import State from "../../Redux/State";
import {Provider} from "react-redux";

describe('Component :: Todo :: Todo', () => {
  let store;

  beforeEach(() => {
    store = createStore(State, State(), undefined);
  });

  it('div id Todo is present', () => {
    const inspector = TestRenderer.create(createElement(store, Todo));

    inspector.root.findByProps({ id: 'todo' })
  });
})


const createElement = (store, component) =>
    <Provider store={store}>
      {React.createElement(component)}
    </Provider>
