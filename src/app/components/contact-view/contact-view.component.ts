import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { changeView } from 'src/app/store/actions/app.actions';
import { ViewEnum } from 'src/app/store/reducers/app.reducer';
import { AppStateI, getContact } from 'src/app/store/selectors';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
  contact$: Observable<ContactModel>;

  constructor(private store: Store<AppStateI>) {
    this.contact$ = store.select(getContact);
  }

  goBackToForm() {
    this.store.dispatch((changeView({view: ViewEnum.CONTACT_LIST, contactId: ''})))
  }
}
