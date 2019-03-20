import { createReducer } from '../../../Util'
import { always } from 'ramda'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  isCreating: false,
}
// ADD_CARD :: String
export const ADD_CARD = '@knp/Actions/Add'

// addCard :: () -> Action ADD_CARD
export const addCard = always({ type: ADD_CARD });

// Card :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [ADD_CARD]: state => ({
    ...state,
    isCreating: true,
  })
})
