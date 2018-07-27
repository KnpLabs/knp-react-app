import { createReducer } from '../../Util'
import { always } from 'ramda'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  isGenerating: false,
  image: null,
}

// GENERATE_DOG :: String
export const GENERATE_DOG = '@knp/Dog/Generate'

// RECEIVE_DOG :: String
export const RECEIVE_DOG = '@knp/Dog/Receive'

// generateDog :: () -> Action GENERATE_DOG
export const generateDog = always({ type: GENERATE_DOG });

// receiveDog :: () -> Action RECEIVE_DOG
export const receiveDog = image => ({
  type: RECEIVE_DOG,
  image,
})

// Dog :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [GENERATE_DOG]: state => ({
    ...state,
    isGenerating: true,
  }),

  [RECEIVE_DOG]: (state, { image }) => ({
    ...state,
    isGenerating: false,
    image,
  })
})
