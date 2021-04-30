import { createAction, props  } from '@ngrx/store';
import { ContactI } from 'src/app/models/contact.interface';

export const addContactsAction = createAction('[Contacts] ADD CONTACT', props<{contact: ContactI}>())
