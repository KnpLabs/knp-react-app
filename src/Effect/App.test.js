import * as App from './App'
import { option, either } from 'crocks'


beforeAll(() => {
  document.querySelector('body').innerHTML = '<div id="root"></div>'
})


it('can read an env file', () => {
  const e = App.readEnv('TEST')
  const a = App.readEnv('NODE_ENV')

  expect(option('not found', e)).toBe('not found')
  expect(option('not found', a)).toBe(process.env.NODE_ENV)
});


it('can read a end file or return a default value', () => {
  const e = App.readEnvOr('not found', 'TEST')
  const a = App.readEnvOr('not found', 'NODE_ENV')

  expect(e).toBe('not found')
  expect(a).toBe(process.env.NODE_ENV)
});


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


afterAll(() => {
  document.querySelector('body').innerHTML = ''
})
