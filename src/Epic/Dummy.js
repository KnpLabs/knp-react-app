import { mergeMap, map } from 'rxjs/operators'
import { tap, map as fmap, props } from 'ramda'
import { ofType, combineEpics } from 'redux-observable'
import { FETCH, fetched } from './../Redux/Module/Dummy'

// dummyEpic :: (Observable Action, Observable State) -> Observable Action
export const dummyEpic = action$ => action$.pipe(
  ofType(FETCH),
  mergeMap(() => fetch('https://httpbin.org/get')),
  map(tap(console.log)),
  map(fmap(formatResponse)),
  map(fetched),
)

// formatResponse :: Fetch.Response -> Object
const formatResponse = props(['Reponse.status'], ['statusText'])

export default combineEpics(
  dummyEpic,
)
