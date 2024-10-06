import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const verifyPermission = userService.isAuthenticated('admin');

  if (!verifyPermission) {
    router.navigate(['welcome']);
    return false;
  }

  return verifyPermission;

  // return false;
};
