import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { map } from 'rxjs';
import { AuthService } from '../services/auth.services';

export const authenticationGuard: CanActivateFn = (route, state) => {
  console.log('Authentication guard activated');
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.verifyToken().pipe(
    map((authUser) => {
      if (authUser) {
        return true;
      } else {
        router.navigate(['/auth/login']);
        return false;
      }
    })
  );
};