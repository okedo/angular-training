import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
@Component({
  selector: 'ng-training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-training';

  public isAuthorized: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.isAuthorized = this.auth.authorized;
  }

  public login(): void {
    this.auth.login();
    this.isAuthorized = this.auth.authorized;
    this.router.navigate(['home']);
  }
  public logout(): void {
    this.auth.logout();
    window.location.reload();
  }
}
