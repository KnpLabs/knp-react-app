import * as Module from './index'

describe('Redux :: Module', () => {
  it('it contains the Dummy state', () => {
    const state = Module.default();

    expect(state.Dummy).toBeDefined();
  });
})
