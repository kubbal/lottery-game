import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInterface } from '../model/user.interface';
import { Observable } from 'rxjs';
import { selectLoginError, selectUsers } from '../store/selector/user.selector';
import { loadUsers } from '../store/action/user.action';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  store = inject(Store);

  getUsers(): Observable<UserInterface[]> {
    return this.store.select(selectUsers);
  }

  getLoginError(): Observable<string | null> {
    return this.store.select(selectLoginError);
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
