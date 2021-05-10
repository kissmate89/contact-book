import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore;
  const initialState = { contacts: [], app: { view: 0, contactId: '' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should not show table if there are no contacts", () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('table')).toBeFalsy();
  })

  it("should show table if there are contacts", () => {
    store.setState({contacts: [{
      id: "knsdfknsldf",
      firstName: "Jane",
      lastName: "Doe",
      phone: "593982",
      email: "janey@doe.com",
      address: "Somewhere in the world",
    }]});

    store.refreshState();
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('table')).toBeTruthy();
  })
});
