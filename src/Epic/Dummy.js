import { mapTo } from 'rxjs/operators'
import { ofType } from 'redux-observable'

export const dummyEpic = action$ => action$.pipe(
  ofType('DUMMY'),
  mapTo({ type: 'dummy' }),
)
