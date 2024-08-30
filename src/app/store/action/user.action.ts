import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../model/user.interface';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: UserInterface[] }>());
export const loginUser = createAction('[User] Login User', props<{ userId: string, password: string }>());
export const loginUserSuccess = createAction('[User] Login User Success', props<{ user: UserInterface }>());
export const loginUserFailure = createAction('[User] Login User Failure', props<{ error: string }>());