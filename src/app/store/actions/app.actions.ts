import { createAction, props  } from '@ngrx/store';

import { ViewEnum } from '../reducers/app.reducer';

export const changeView = createAction('[App] CHANGE VIEW', props<{view: ViewEnum, contactId: string}>())
