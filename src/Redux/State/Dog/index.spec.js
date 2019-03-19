import * as Module from '.'

describe('Redux :: Module', () => {
  it('contains the Dog state', () => {
    const state = Module.default();

    expect(state.Dog).toBeDefined();
  });
})
