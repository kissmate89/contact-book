import { createSelector } from "@ngrx/store";

import { ContactI } from "../models/contact.interface";
import { StateI } from "../models/state.interface";

export const getAppState = (state: StateI) => state.app;
export const getSelectedContactId = createSelector(getAppState, state => state.contactId );

export const getContacts = (state: StateI) => state.contacts;

export const getContact = createSelector(
  getContacts,
  getSelectedContactId,
  (contacts: ContactI[], selectedContactId: string) =>
    contacts.find((i: ContactI) => i.id === selectedContactId)
    || {id: '', firstName: '', lastName: '', phone: '', email: '', address: ''}
  );
