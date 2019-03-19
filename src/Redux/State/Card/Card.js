import { createReducer } from '../../../Util'
import { always } from 'ramda'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  cards:  [],
  isCreating: false,
  currentTitle: '',
}
// ADD_CARD :: String
export const ADD_CARD = '@knp/Card/Add'

// SET_TITLE_CARD :: String
export const SET_TITLE_CARD = '@knp/Card/SetTitle'

// addCard :: () -> Action ADD_CARD
export const addCard = always({ type: ADD_CARD });

// setTitle :: () -> Action SET_TITLE_CARD
export const setTitle = event => ({
  type: SET_TITLE_CARD,
  title: event.target.value,
})

// Card :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [ADD_CARD]: state => ({
    ...state,
    isCreating: true,
    currentTitle: ''
  }),

  [SET_TITLE_CARD]: (state, {title}) => ({
    ...state,
    currentTitle: title,
  })
})
