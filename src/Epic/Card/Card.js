import { combineEpics, ofType } from 'redux-observable'
import * as Card from '../../Redux/State/Card/Card'
import {tap, ignoreElements, delay, take} from 'rxjs/operators'


// addCardEpic :: (Observable Action, Observable State) -> Observable Action
export const addCardEpic = (action$, state$) => action$.pipe(
    ofType(Card.ADD_CARD),
    take(1),
    delay(100),
    tap(() => {
        document.getElementById('title_form').focus()
    }),
    ignoreElements()
)

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
    addCardEpic
)