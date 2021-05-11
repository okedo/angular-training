import { Injectable } from '@angular/core';
import { SessionStorageService } from './common/helpers/session-storage.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public get authorized(): boolean {
    return SessionStorageService.authorized;
  }

  public login(): void {
    SessionStorageService.saveToken();
  }
  public logout(): void {
    SessionStorageService.clearToken();
  }
}
