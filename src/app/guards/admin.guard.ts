import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild() {
    if (this.authService.isAdminRole) return true;
    else {
      alert('Permission denied for this page');
      return false;
    }
  }
}
