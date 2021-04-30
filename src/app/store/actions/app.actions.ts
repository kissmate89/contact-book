import { createAction, props  } from '@ngrx/store';

import { ViewEnum } from 'src/app/models/view.enum';

export const changeView = createAction('[App] CHANGE VIEW', props<{view: ViewEnum, contactId: string}>())
