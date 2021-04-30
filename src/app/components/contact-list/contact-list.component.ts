import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ContactModel } from 'src/app/models/contact.model';
import { changeView } from 'src/app/store/actions/app.actions';
import { ViewEnum } from 'src/app/store/reducers/app.reducer';
import { AppStateI } from 'src/app/store/selectors';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts$: Observable<ContactModel[]>;

  constructor(private store: Store<AppStateI>) {
    this.contacts$ = this.store.select(state => state.contacts);
  }

  selectContact(contactId: string) {
    this.store.dispatch((changeView({view: ViewEnum.CONTACT_VIEW, contactId})))
  }
}
