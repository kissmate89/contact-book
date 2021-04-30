import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { StateI } from 'src/app/models/state.interface';
import { addContactsAction } from 'src/app/store/actions/contacts.actions';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private store: Store<StateI>) { }

  addContact() {
    this.store.dispatch(addContactsAction({ contact: this.contactForm.value }))
  }

}
