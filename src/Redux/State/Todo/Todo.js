import { createReducer } from '../../../Util'
import {always} from "ramda";
// INITIAL_STATE :: State
export const INITIAL_STATE = {
  isCreating: false,
  cards: [],
  currentTitle: '',
}

// CHECK_ENTER_EVENT :: String
export const SUBMIT_FORM = '@knp/Form/SubmitForm'

// SET_TITLE_CARD :: String
export const SET_TITLE_CARD = '@knp/Form/SetTitle'

// ADD_CARD :: String
export const ADD_CARD = '@knp/Actions/Add'


// addCard :: () -> Action ADD_CARD
export const addCard = always({ type: ADD_CARD });

// submitForm :: () -> Action SUBMIT_FORM
export const submitForm = event => {
  event.preventDefault();
  return {
    type: SUBMIT_FORM
  }
}


// setTitle :: () -> Action SET_TITLE_CARD
export const setTitle = event => ({
  type: SET_TITLE_CARD,
  title: event.target.value,
})

// Form :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [SUBMIT_FORM]: state => {
      state.cards.push({title: state.currentTitle});
      return {
        ...state,
        isCreating: false,
        currentTitle: '',
      }
  },

  [SET_TITLE_CARD]: (state, {title}) => ({
    ...state,
    currentTitle: title,
  }),

  [ADD_CARD]: state => ({
    ...state,
    isCreating: true,
  }),
})
