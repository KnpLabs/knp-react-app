import * as Card from './Card'

describe('Redux :: Module :: Card', () => {
  it('reduces to initial state', () => {
    const state = Card.default()

    expect(state).toEqual(Card.INITIAL_STATE);
  });

  it('reduces the addCard action', () => {
    const s1     = Card.default();
    const action = Card.addCard();
    const s2     = Card.default(s1, action);

    expect(s2.isCreating).toBe(true);
  });

  it('reduces setTitle action', () => {
    const s1        = Card.default();
    const addCard   = Card.addCard();
    const s2        = Card.default(s1, addCard);
    const setTitle  = Card.setTitle({target: {value: 'test'}});
    const s3        = Card.default(s2, setTitle);

    expect(s3.isCreating).toBe(true);
    expect(s3.currentTitle).toEqual('test');
  });
})
