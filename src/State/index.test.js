import * as State from './index'


it('boot the application state', () => {
  expect(State.default({}, {})).toBe(State.initialState)
});
