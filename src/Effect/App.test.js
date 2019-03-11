import { combineEpics } from 'redux-observable'
import { of } from 'rxjs'
import { option, either } from 'crocks'
import { pipe } from 'ramda'
import * as App from './App'
import * as o from 'rxjs/operators'

beforeAll(() => {
  document.querySelector('body').innerHTML = '<div id="root"></div>'
})

it('can create a store', () => {
  const storeResult = App.configureStore()
  const store = either(error => Error('Oups!'), store => store, storeResult);

  expect(store.dispatch).toBeDefined()
  expect(store.getState).toBeDefined()
});

it('can decorate a reducer for debug purpose', () => {
  const reducer = (state, action) => 'OK'
  const loggableReducer = App.debugReducerDecorator(reducer);

  loggableReducer({}, {});
});

it('can start the application', () => {
  const appResult = App.start('root')

  either(
    error => {
      throw error
    },
    succ => 'OK',
    appResult
  )
});

it('can create curried and data last epic', () => {
  // testEpic :: Observable a -> Observable b -> Observable b
  const testEpic = state$ => pipe(
    o.withLatestFrom(state$),
    o.tap(([ action, state ]) => {
      expect(action).toBe('action')
      expect(state).toBe('state')
    }),
    o.mapTo('OK'),
  )

  // rootEpic :: (Observable b, Observable a) -> Observable b
  const rootEpic = combineEpics(
    App.epic(testEpic),
  )

  return rootEpic(of('action'), of('state'))
    .toPromise()
    .then(d => expect(d).toBe('OK'))
});

afterAll(() => {
  document.querySelector('body').innerHTML = ''
})
