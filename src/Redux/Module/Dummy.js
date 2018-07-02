import { always } from 'ramda'
import { createReducer } from '../../Util'

// INITIAL_STATE :: Boolean
export const INITIAL_STATE = ({
  isFetching: false,
  payload: {},
})

// FETCH :: String
export const FETCH = '@<project name>/Dummy/FETCH'

// FETCHED :: String
export const FETCHED = '@<project name>/Dummy/FETCHED'
//
// FETCHED :: String
export const CLEAN = '@<project name>/Dummy/CLEAN'

// fetch :: () -> Redux.Action FETCH
export const fetch = always({ type: FETCH })

// fetched :: () -> Redux.Action FETCHED
export const fetched = payload => ({
  type: FETCHED,
  payload,
})

// clean :: () -> Redux.Action CLEAN
export const clean = always({ type: CLEAN })

// Dummy :: (Redux.State, Redux.Action *) -> State
export default createReducer(INITIAL_STATE, {
  [FETCH]: state => ({
    ...state,
    isFetching: true,
  }),
  [FETCHED]: (state, {payload}) => ({
    ...state,
    isFetching: false,
    payload,
  }),
  [CLEAN]: always(INITIAL_STATE),
})
