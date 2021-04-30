import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { changeView } from 'src/app/store/actions/app.actions';
import { getContact } from 'src/app/store/selectors';
import { ContactI } from 'src/app/models/contact.interface';
import { ViewEnum } from 'src/app/models/view.enum';
import { StateI } from 'src/app/models/state.interface';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
  contact$: Observable<ContactI>;

  constructor(private store: Store<StateI>) {
    this.contact$ = store.select(getContact);
  }

  goBackToForm() {
    this.store.dispatch((changeView({view: ViewEnum.CONTACT_LIST, contactId: ''})))
  }
}
