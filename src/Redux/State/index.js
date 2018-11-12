import Dog from './Dog'
import { tap, pipe } from 'ramda'
import { combineReducers } from 'redux'

// debug :: ((State, Action *) -> State) -> State -> Action * -> State
export const debug = reducer => (state = reducer(), action = {}) => pipe(
  tap(({ type }) => console.groupCollapsed(type || '')),
  tap(() => console.info(':: DEBUG ::')),
  tap(({ type }) => console.info(`Action :: ${type || 'NONE'}`)),
  tap(({ type, ...payload }) => console.info('Payload ::', payload)),
  tap(() => console.info('InitialState ::', state)),
  tap(() => console.time('Reducer :: Timer :')),
  action => reducer(state, action),
  tap(() => console.info('NewState ::', state)),
  tap(() => console.timeEnd('Reducer :: Timer :')),
  tap(() => console.info(':: END DEBUG ::')),
  tap(() => console.info('')),
  tap(() => console.groupEnd()),
)(action)

// State :: (State, Action *) -> State
export default combineReducers({
  Dog,
})
