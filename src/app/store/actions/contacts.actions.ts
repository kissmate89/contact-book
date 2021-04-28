import { createAction, props  } from '@ngrx/store';
import { ContactModel } from 'src/app/models/contact.model';

export const getContactsAction = createAction('[Contacts] GET CONTACTS')
export const addContactsAction = createAction('[Contacts] ADD CONTACT', props<{contact: ContactModel}>())
