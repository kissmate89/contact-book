import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AppStateI } from 'src/app/models/appState.interface';
import { ViewEnum } from 'src/app/models/view.enum';

import { changeView } from '../actions/app.actions';

export const initialState: AppStateI = {view: ViewEnum.CONTACT_LIST, contactId: ''}

const _appReducer = createReducer(
  initialState,
  on(changeView,
    (state, {view, contactId}) => ({...state, view, contactId })
  )
)

export const appReducer: ActionReducer<AppStateI, Action> = (state, action) => _appReducer(state, action);
