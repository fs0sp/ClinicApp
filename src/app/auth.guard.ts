import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);  // Inject the Router service
  const localStorageData = localStorage.getItem('auth');

  if (localStorageData === 'success') { 
    return true;
  } else {
    router.navigate(['/signin']); // Use the injected router to navigate
    return false;
  }
};
