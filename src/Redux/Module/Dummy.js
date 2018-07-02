import { always } from 'ramda'
import { createReducer } from '../../Util'

// INITIAL_STATE :: Boolean
export const INITIAL_STATE = false

// ON :: String
export const ON = '@<project name>/Dummy/ON'

// OFF :: String
export const OFF = '@<project name>/Dummy/OFF'

// on :: () -> Redux.Action ON
export const on = () => ({
  type: ON,
})

// on :: () -> Redux.Action OFF
export const off = () => ({
  type: OFF,
})

// Dummy :: (Redux.State, Redux.Action *) -> State
export default createReducer(INITIAL_STATE, {
  [ON]: always(true),
  [OFF]: always(false),
})
