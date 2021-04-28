import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { contactsReducer } from "./store/reducers/contacts.reducer"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
