import { createSelector } from "@ngrx/store";

import { ContactModel } from "../models/contact.model";
import { AppStateModel } from "./reducers/app.reducer";

export interface AppStateI {
  app: AppStateModel,
  contacts: ContactModel[]
}

export const getAppState = (state: AppStateI) => state.app;
export const getSelectedContactId = createSelector(getAppState, state => state.contactId );

export const getContacts = (state: AppStateI) => state.contacts;

export const getContact = createSelector(
  getContacts,
  getSelectedContactId,
  (contacts: ContactModel[], selectedContactId: string) =>
    contacts.find((i: ContactModel) => i.id === selectedContactId)
    || {id: '', firstName: '', lastName: '', phone: '', email: '', address: ''}
  );
