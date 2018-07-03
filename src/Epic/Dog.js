import { combineEpics, ofType } from 'redux-observable'
import * as Dog from '../Redux/State/Dog'
import { mergeMap, map } from 'rxjs/operators'
import { invoker } from 'ramda'

export const fetchDogEpic = (action$, state$, { fetchDog }) => action$.pipe(
  ofType(Dog.GENERATE_DOG),
  mergeMap(fetchDog),
  mergeMap(invoker(0, 'json')),
  map(dogResponse => ({
    src: dogResponse.message,
    alt: 'A tiny or big puppy',
  })),
  map(Dog.receiveDog),
)

export default combineEpics(
  fetchDogEpic,
)
