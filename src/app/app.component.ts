import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppStateModel, ViewEnum } from './store/reducers/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'contact-book';
  currentView: Observable<ViewEnum>;

  constructor(private store: Store<{app: AppStateModel}>) {
    this.currentView = this.store.select(state => state.app.view);
  }


}
