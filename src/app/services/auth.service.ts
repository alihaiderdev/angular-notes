import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // isUserLoggedIn(): boolean {
  //   return false;
  // }
  get isUserLoggedIn(): boolean {
    return true;
  }
  get isAdminRole(): boolean {
    return true;
  }
}
