import { applyMiddleware, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { compose, flip, uncurryN } from 'ramda'
import { render } from 'react-dom'
import { tryCatch, chain } from 'crocks'
import App from '../Component/App'
import React from 'react'
import rootReducer from '../State'


// rootEpic :: (Observable Action, Observable State) -> Observable Action
export const rootEpic = combineEpics()


// configureStore :: () -> Result Error Redux.Store
export const configureStore = tryCatch(() => {
  const env = process.env.NODE_ENV || 'development'
  const debug = Boolean(process.env.REACT_APP_DEBUG_STATE || 0)
  const reducer = debug
    ? debugReducerDecorator(rootReducer)
    : rootReducer

  if (env === 'test') {
    return createStore(rootReducer)
  }

  const epicMiddleware = createEpicMiddleware()
  const store = createStore(reducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return store
})


// debugReducerDecorator :: ((State, Action) -> State) -> (State, Action) -> State
export const debugReducerDecorator = reducer => (state, action) => {
  console.groupCollapsed(action.type || '')
  console.log('ACTION :: ', action)
  console.log('CURRENT STATE :: ', state)

  const newState = reducer(state, action)

  console.log('NEW STATE :: ', newState)
  console.groupEnd()

  return newState
}


// start :: String -> Result Error Unit
export const start = id => {
  const storeResult = configureStore()
  const renderApp = chain(tryCatch(store =>
    render(<App />, document.getElementById(id))
  ))

  return renderApp(storeResult);
}


// epic
//  :: (Observable State -> Observable Action -> Observable Action) 
//  -> (Observable Action, Observable State) 
//  -> Observable Action
export const epic = compose(flip, uncurryN(2))
