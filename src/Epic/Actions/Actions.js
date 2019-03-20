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

// openRemoveConfirmationEpic :: (Observable Action, Observable State) -> Observable Action
export const openRemoveConfirmationEpic = (action$, state$) => action$.pipe(
    ofType(Todo.OPEN_REMOVE_CONFIRMATION),
    delay(0),
    tap(() => {
        if (window.confirm('Are you sure you want to delete this card ?')) {
            console.log(state$.value.Todo.cardIndexToRemove)
        }
    }),
    ignoreElements()
)

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
    addCardEpic,
    openRemoveConfirmationEpic
)