import { AppStateI } from "./appState.interface";
import { ContactI } from "./contact.interface";

export interface StateI {
  app: AppStateI,
  contacts: ContactI[]
}
