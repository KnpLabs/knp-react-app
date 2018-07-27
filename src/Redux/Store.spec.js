import reducer from './State'
import { identity } from 'ramda'
import { createReducer } from '../Util'
import * as Store from './Store'

describe('Redux :: Store', () => {
  it('can create a Store', () => {
    const store = Store.Store('test', undefined, identity);

    expect(store.getState()).toBe('test');

    store.dispatch({ type: 'void' })

    expect(store.getState()).toBe('test');
  });
})
