import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ViewEnum } from './models/view.enum';
import { StateI } from './models/state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'contact-book';
  currentView: Observable<ViewEnum>;

  constructor(private store: Store<StateI>) {
    this.currentView = this.store.select(state => state.app.view);
  }


}
