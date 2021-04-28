import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ContactModel } from '../../models/contact.model';

import {addContactsAction} from '../actions/contacts.actions';

export const initialState: ContactModel[] = [{
  firstName: "Jane",
  lastName: "Doe",
  phone: "593982",
  email: "janey@doe.com",
  address: "Somewhere in the world",
}]

const _contactsReducer = createReducer(
  initialState,
  on(addContactsAction,
    (state, { contact }) => ([...state, contact ])
  )
)

export const contactsReducer: ActionReducer<ContactModel[], Action> = (state, action) => _contactsReducer(state, action);

