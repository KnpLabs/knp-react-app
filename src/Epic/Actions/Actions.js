import { combineEpics, ofType } from 'redux-observable'
import * as Todo from '../../Redux/State/Todo/Todo'
import {tap, ignoreElements, delay} from 'rxjs/operators'


// addCardEpic :: (Observable Action, Observable State) -> Observable Action
export const addCardEpic = (action$, state$) => action$.pipe(
    ofType(Todo.ADD_CARD),
    delay(0),
    tap(() => {
        document.getElementById('title_form').focus()
    }),
    ignoreElements()
)

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
    addCardEpic,
)