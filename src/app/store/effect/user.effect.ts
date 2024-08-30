import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loginUser, loginUserSuccess, loginUserFailure } from '../action/user.action';
import { UserInterface } from '../../model/user.interface';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        const users: UserInterface[] = [
          { userId: '1', userName: 'John Doe', password: '1234' },
          { userId: '2', userName: 'Jane Smith', password: 'abcd' },
        ];
        return of(loadUsersSuccess({ users }));
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap(({ userId, password }) => {
        const users: UserInterface[] = [
          { userId: '1', userName: 'John Doe', password: '1234' },
          { userId: '2', userName: 'Jane Smith', password: 'abcd' },
        ];
        const user = users.find(u => u.userId === userId && u.password === password);
        if (user) {
          return of(loginUserSuccess({ user }));
        } else {
          return of(loginUserFailure({ error: 'Invalid credentials' }));
        }
      })
    )
  );
}