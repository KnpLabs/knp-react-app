import * as Dog from './Dog'

describe('Redux :: Module :: Dog', () => {
  it('reduces to initial state', () => {
    const state = Dog.default()

    expect(state).toEqual(Dog.INITIAL_STATE);
  });

  it('reduces the generate dog action', () => {
    const s1     = Dog.default();
    const action = Dog.generateDog();
    const s2     = Dog.default(s1, action);

    expect(s2).not.toEqual(s1)

    expect(s2.isGenerating).toBe(true);
  });

  it('reduces receive dig action', () => {
    const s1       = Dog.default();
    const generate = Dog.generateDog();
    const s2       = Dog.default(s1, generate);
    const receive  = Dog.receiveDog({ src: 'foo', alt: 'bar' });
    const s3       = Dog.default(s2, receive);

    expect(s3).not.toEqual(s2);
    expect(s3.isGenerating).toBe(false);
    expect(s3.image).toEqual({ src: 'foo', alt: 'bar' });
  });
})
