import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, loginUserSuccess, loginUserFailure } from '../action/user.action';
import { UserState } from '../../model/user-state.interface';

const initialState: UserState = {
  users: [],
  loggedInUser: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loginUserSuccess, (state, { user }) => ({ ...state, loggedInUser: user, error: null })),
  on(loginUserFailure, (state, { error }) => ({ ...state, error }))
);