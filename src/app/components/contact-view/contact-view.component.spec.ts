import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ContactViewComponent } from './contact-view.component';

describe('ContactViewComponent', () => {
  let component: ContactViewComponent;
  let fixture: ComponentFixture<ContactViewComponent>;
  const initialState = { contacts: [], app: { view: 0, contactId: '' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactViewComponent ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
