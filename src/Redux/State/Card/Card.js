import { createReducer } from '../../../Util'
import { always } from 'ramda'
import {RECEIVE_DOG} from "../Dog/Dog";

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
//export const setTitle = always({ type: SET_TITLE_CARD });

// setTitle :: () -> Action SET_TITLE_CARD
export const setTitle = event => ({
  type: SET_TITLE_CARD,
  title: event.target.value,
})


export const focusTitle = document => (
  document.getElementById('title_form').focus()
)

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
