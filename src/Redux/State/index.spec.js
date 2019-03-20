import * as Module from '.'

describe('Redux :: Module', () => {
  it('contains the Actions, Form state', () => {
    const state = Module.default();

    expect(state.Actions).toBeDefined();
    expect(state.Form).toBeDefined();
  });
})
