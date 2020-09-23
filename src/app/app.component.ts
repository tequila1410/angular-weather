import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User} from './auth/models/user.model';
import { userLoginFromLocalStorage } from './auth/state/user.actions';
import { Store } from '@ngrx/store';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
              private store: Store<State>) {
    if (localStorage.getItem('currentUser') && localStorage.getItem('token')) {
      let user: User = JSON.parse(localStorage.getItem('currentUser'));
      const token = localStorage.getItem('token');

      this.store.dispatch(userLoginFromLocalStorage({user, token}))
    }
  }
}
