import * as Form from './Form'
import * as Actions from '../Actions/Actions'

describe('Redux :: Module :: Form', () => {
  it('reduces to initial state', () => {
    const state = Form.default()

    expect(state).toEqual(Form.INITIAL_STATE);
  });


  it('reduces setTitle action', () => {
    const s1        = Actions.default();
    const addCard   = Actions.addCard();
    const s2        = Actions.default(s1, addCard);
    const setTitle  = Form.setTitle({target: {value: 'test'}});
    const s3        = Form.default(s2, setTitle);

    expect(s2.isCreating).toBe(true);
    expect(s3.currentTitle).toEqual('test');
  });
})
