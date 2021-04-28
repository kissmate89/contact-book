import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { contactsReducer } from "./store/reducers/contacts.reducer"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contacts: contactsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
