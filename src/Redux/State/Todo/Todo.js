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

// CANCEL_FORM :: String
export const CANCEL_FORM = '@knp/Form/CancelForm'


// addCard :: () -> Action ADD_CARD
export const addCard = always({ type: ADD_CARD });

// cancelForm :: () -> Action CANCEL_FORM
export const cancelForm = event => {
  return {
    type: CANCEL_FORM,
    hasCanceled: event.keyCode === 27
  }
}


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

  [CANCEL_FORM]: (state, {hasCanceled}) => ({
    ...state,
    isCreating: !hasCanceled,
    currentTitle: hasCanceled ? '' : state.currentTitle,
  }),
})
