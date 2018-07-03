import * as Module from './index'

describe('Redux :: Module', () => {
  it('it contains the Dog state', () => {
    const state = Module.default();

    expect(state.Dog).toBeDefined();
  });
})
