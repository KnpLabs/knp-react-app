import { combine, init } from 'ramduck-redux'

// initialState :: State
export const initialState = {}

// State :: (State, Action) -> State
export default combine(
  init(initialState),
)
