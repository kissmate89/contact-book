import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { changeView } from '../actions/app.actions';

export enum ViewEnum {
  CONTACT_LIST,
  CONTACT_VIEW
}

export interface AppStateModel {
  view: ViewEnum;
  contactId: string;
}

export const initialState: AppStateModel = {view: ViewEnum.CONTACT_LIST, contactId: ''}

const _appReducer = createReducer(
  initialState,
  on(changeView,
    (state, {view, contactId}) => ({...state, view, contactId })
  )
)

export const appReducer: ActionReducer<AppStateModel, Action> = (state, action) => _appReducer(state, action);




