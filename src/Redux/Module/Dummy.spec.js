import * as Dummy from './Dummy'

describe('Redux :: Module :: Dummy', () => {
  it('can reduce to initial state by default', () => {
    expect(Dummy.default()).toBe(Dummy.INITIAL_STATE);
  });

  it('can reduce ON / OFF action', () => {
    const on = Dummy.on();
    const state = Dummy.default(Dummy.INITIAL_STATE, on);

    expect(state).toEqual(true);

    const off = Dummy.off();

    const state2 = Dummy.default(state, off);

    expect(state2).toEqual(false);
  });

})
