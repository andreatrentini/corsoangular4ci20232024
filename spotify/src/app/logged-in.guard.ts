import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// loggedInGuard è una funzione che restituisce true/false
// E' di tipo CanActivate function che ne definisce la firma
export const loggedInGuard: CanActivateFn = (route, state) => {
  // inject può essere usato al posto della dependency injection quando non ho a disposizione
  // un costruttore, come nel caso dei componenti
  if (inject(AuthService).IsLoggedIn) {
    return true;
  }
  else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
