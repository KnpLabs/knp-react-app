import { uncurryN } from 'ramda'
import { createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { pipe, __, tap } from 'ramda'

// epicMiddleware :: Store -> Store
export const epicMiddleware = createEpicMiddleware();

// Store :: State -> (Store -> Store) -> (Action -> State -> State) -> Store
export const Store = uncurryN(3,
  initialState => middleware => reducer =>
    createStore(reducer, initialState, middleware)
)

// StoreWithEpic :: State -> Epic -> (Action -> State -> State) -> Store
export const StoreWithEpic = uncurryN(3,
  initialState => rootEpic => pipe(
    createStore(__, initialState, applyMiddleware(epicMiddleware)),
    tap(() => epicMiddleware.run(rootEpic)),
  )
)
