import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CanActivateFn } from "@angular/router";

// auth.guard.ts
export const authGuard = (config: { requiresAuth?: boolean, isAuthPath?: boolean }): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    
    if (config.requiresAuth && !authService.isLoggedIn()) {
      return false;
    }

    if (config.isAuthPath && authService.isLoggedIn()) {
      return false;
    }
    console.log('wtf')
    return true;
  };
};
