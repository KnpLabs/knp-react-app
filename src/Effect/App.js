import { applyMiddleware, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { pipe, uncurryN } from 'ramda'
import { prop, option, tryCatch, chain } from 'crocks'
import { render } from 'react-dom'
import App from '../Component/App'
import React from 'react'
import rootReducer from '../State'


// rootEpic :: (Observable Action, Observable State) -> Observable Action
export const rootEpic = combineEpics()


// readEnv :: forall a. String -> Maybe a
export const readEnv = name => prop(name, process.env)


// readEnvOr :: forall a. a -> String -> Maybe a
export const readEnvOr = uncurryN(2, defaultValue => pipe(
  readEnv,
  option(defaultValue)
))


// configureStore :: () -> Result Error Redux.Store
export const configureStore = tryCatch(() => {
  const env = readEnvOr('development', 'NODE_ENV')
  const debug = Boolean(readEnvOr(0, 'REACT_APP_DEBUG_STATE'))
  const reducer = debug
    ? debugReducerDecorator(rootReducer)
    : rootReducer

  if (env === 'test') {
    return createStore(rootReducer)
  }

  const epicMiddleware = createEpicMiddleware()
  const store = createStore(reducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return store;
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
