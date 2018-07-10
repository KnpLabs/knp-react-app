import { uncurryN } from 'ramda'
import { createStore } from 'redux'

// Store :: State -> (Store -> Store) -> (Action -> State -> State) -> Store
export const Store = uncurryN(3,
  initialState => middleware => reducer =>
    createStore(reducer, initialState, middleware)
)
