import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducer/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(selectUserState, (state: UserState) => state.users);
export const selectLoggedInUser = createSelector(selectUserState, (state: UserState) => state.loggedInUser);
export const selectLoginError = createSelector(selectUserState, (state: UserState) => state.error);
