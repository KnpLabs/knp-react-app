import { combineEpics, ofType } from 'redux-observable'
import * as Card from '../../Redux/State/Card/Card'
import {mergeMap, map, tap, ignoreElements, delay, take} from 'rxjs/operators'
import { invoker } from 'ramda'
import {ADD_CARD} from "../../Redux/State/Card/Card";


//
export const addCardEpic = (action$, state$) => action$.pipe(
    ofType(Card.ADD_CARD),
    take(1),
    delay(100),
    tap(() => {
        document.getElementById('title_form').focus()
    }),
    ignoreElements()
)

export default combineEpics(
    addCardEpic
)