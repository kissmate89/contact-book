import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ContactModel } from '../../models/contact.model';

import { addContactsAction } from '../actions/contacts.actions';

const guidGenerator = () => {
  var S4 = () => {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const initialState: ContactModel[] = []

const _contactsReducer = createReducer(
  initialState,
  on(addContactsAction,
    (state, { contact }) => ([...state, {...contact, id: guidGenerator()} ])
  )
)

export const contactsReducer: ActionReducer<ContactModel[], Action> = (state, action) => _contactsReducer(state, action);
