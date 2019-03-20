import * as Actions from './Actions'

describe('Redux :: Module :: Actions', () => {
  it('reduces to initial state', () => {
    const state = Actions.default()

    expect(state).toEqual(Actions.INITIAL_STATE);
  });

  it('reduces the addCard action', () => {
    const s1     = Actions.default();
    const action = Actions.addCard();
    const s2     = Actions.default(s1, action);

    expect(s2.isCreating).toBe(true);
  });
})
