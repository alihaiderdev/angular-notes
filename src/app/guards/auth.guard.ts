import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return true;
  // }

  constructor(private authService: AuthService) {}

  canActivate() {
    // logic goes here for authentication guard
    // if (this.authService.isUserLoggedIn()) return true;
    if (this.authService.isUserLoggedIn) return true;
    else {
      alert('Permission denied for this page');
      return false;
    }
  }
}
