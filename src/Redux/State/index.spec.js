import * as Module from './index'

describe('Redux :: Module', () => {
  it('contains the Dog state', () => {
    const state = Module.default();

    expect(state.Dog).toBeDefined();
  });
})
