import Dog from './Dog'
import { combineEpics } from 'redux-observable'

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
  Dog,
)
