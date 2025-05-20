import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)

  return authService.authUser$.pipe(
    map((user) => {
      if(user && user.role === 'admin'){
        return true
      }else{
        alert('No tienes permiso para estar aquí')
        return false
      }
    })
  )
};
