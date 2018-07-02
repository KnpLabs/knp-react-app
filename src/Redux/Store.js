import { uncurryN } from 'ramda'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { pipe, tap } from 'ramda'

// epicMiddleware :: Store -> Store
export const epicMiddleware = createEpicMiddleware();

const debugState = reducer => (state, action) => {
  console.log('ACTION:', action);
  const newState = reducer(state, action);
  console.log('NEW STATE:', newState);

  return newState;
}

// Store :: State -> (Store -> Store) -> (Action -> State -> State) -> Store
export const Store = uncurryN(3,
  initialState => middleware => reducer =>
    createStore(reducer, initialState, middleware)
)

// StoreWithEpic :: State -> Epic -> (Action -> State -> State) -> Store
export const StoreWithEpic = uncurryN(3,
  initialState => rootEpic => pipe(
    reducer => createStore(
      process.env.REACT_APP_DEBUG_STATE ? debugState(reducer) : reducer,
      initialState,
      applyMiddleware(epicMiddleware)
    ),
    tap(() => epicMiddleware.run(rootEpic)),
  )
)
