import { createReducer } from '../../../Util'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  currentTitle: '',
}

// SET_TITLE_CARD :: String
export const SET_TITLE_CARD = '@knp/Form/SetTitle'

// setTitle :: () -> Action SET_TITLE_CARD
export const setTitle = event => ({
  type: SET_TITLE_CARD,
  title: event.target.value,
})

// Card :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [SET_TITLE_CARD]: (state, {title}) => ({
    ...state,
    currentTitle: title,
  })
})
