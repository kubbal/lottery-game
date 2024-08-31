import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticated())
    return true;
  inject(Router).navigate(['']);
  return false;
};
