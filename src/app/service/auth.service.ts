import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../store/action/user.action';
import { selectLoggedInUser } from '../store/selector/user.selector';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  store = inject(Store);

  login(userId: string, password: string) {
    this.store.dispatch(loginUser({ userId, password }));
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(selectLoggedInUser).pipe(map(user => !!user));
  }
}
