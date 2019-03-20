import * as Todo from "./Todo";

describe('Redux :: Module :: Todo', () => {
  it('reduces to initial state', () => {
    const state = Todo.default()

    expect(state).toEqual(Todo.INITIAL_STATE);
  });


  it('reduces setTitle action', () => {
    const s1        = Todo.default();
    const addCard   = Todo.addCard();
    const s2        = Todo.default(s1, addCard);
    const setTitle  = Todo.setTitle({target: {value: 'test'}});
    const s3        = Todo.default(s2, setTitle);

    expect(s2.isCreating).toBe(true);
    expect(s3.currentTitle).toEqual('test');
  });
})
