import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  contact = {
    id: "klmknlasdklnasdknasd",
    firstName: "Jane",
    lastName: "Doe",
    phone: "593982",
    email: "janey@doe.com",
    address: "Somewhere in the world",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
