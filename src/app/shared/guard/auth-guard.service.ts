import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../../login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (LoginService.getLoginInfo()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
