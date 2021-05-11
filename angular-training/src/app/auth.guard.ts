import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';

import { SessionStorageService } from './common/helpers/session-storage.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router) { }
  public canActivate(): boolean {
    return this.handleAuth();
  }

  public canLoad(): boolean {
    return this.handleAuth();
  }

  private handleAuth(): boolean {
    const token = SessionStorageService.authorized;

    if (token) {
      return true;
    }

    this.router.navigate(['error']);
    return false;
  }
}
