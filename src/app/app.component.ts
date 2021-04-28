import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ContactModel } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts$: Observable<ContactModel[]>

  constructor(private store: Store<{ contacts: ContactModel[] }>) {
    this.contacts$ = store.select('contacts');
  }
}
