import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../store/action/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  store = inject(Store);
  private isLoggedIn = false;

  login(userId: string, password: string) {
    this.store.dispatch(loginUser({ userId, password }));
    this.isLoggedIn = true;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
