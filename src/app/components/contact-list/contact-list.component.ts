import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts$: Observable<ContactModel[]>;

  constructor(private store: Store<{ contacts: ContactModel[] }>) {
    this.contacts$ = store.select('contacts');
  }

  // ngOnInit() {
  //   this.contacts$ = store.select('contacts');
  // }

}
