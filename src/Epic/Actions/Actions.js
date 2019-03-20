import { combineEpics, ofType } from 'redux-observable'
import * as Actions from '../../Redux/State/Actions/Actions'
import {tap, ignoreElements, delay} from 'rxjs/operators'


// addCardEpic :: (Observable Action, Observable State) -> Observable Action
export const addCardEpic = (action$, state$) => action$.pipe(
    ofType(Actions.ADD_CARD),
    delay(0),
    tap(() => {
        document.getElementById('title_form').focus()
    }),
    ignoreElements()
)

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
    addCardEpic
)