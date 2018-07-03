import Dog from './Dog'
import { tap, pipe } from 'ramda'
import { combineReducers } from 'redux'

// debug :: ((State, Action *) -> State) -> (State, Action *) -> State
export const debug = reducer => pipe(
  tap((state, action) => console.log(`Debug :: ${action.type}`)),
  tap((state) => console.log('InitialState ::', state)),
  tap((_, { type, ...payload }) => console.log('Payload ::', payload)),
  tap(() => console.time()),
  reducer,
  tap(() => console.timeEnd()),
  tap(state => console.log('NewState ::', state)),
)

// State :: (State, Action *) -> State
export default combineReducers({
  Dog,
})
