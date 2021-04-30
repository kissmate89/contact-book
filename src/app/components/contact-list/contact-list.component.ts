import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ContactI } from 'src/app/models/contact.interface';
import { StateI } from 'src/app/models/state.interface';
import { ViewEnum } from 'src/app/models/view.enum';
import { changeView } from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts$: Observable<ContactI[]>;

  constructor(private store: Store<StateI>) {
    this.contacts$ = this.store.select(state => state.contacts);
  }

  selectContact(contactId: string) {
    this.store.dispatch((changeView({view: ViewEnum.CONTACT_VIEW, contactId})))
  }
}
