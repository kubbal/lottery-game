import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess, loginUser, loginUserSuccess, loginUserFailure } from '../action/user.action';
import { users } from '../../data/users';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return of(loadUsersSuccess({ users }));
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap(({ userId, password }) => {
        const user = users.find(u => u.userId === userId && u.password === password);
        if (user)
          return of(loginUserSuccess({ user }));
        return of(loginUserFailure({ error: 'Invalid credentials' }));
      })
    )
  );
}