import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, from, Observable, Subject, Subscription, throwError} from "rxjs";
import {Router} from "@angular/router";
import Realm from "realm";

// Initialize your App.
const app = new Realm.App({
  id: "capstone-welvdpu",
});



export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnDestroy {

  constructor(private router: Router,) {

  }

  startTokenExpirationTimer(expirationTime: number): void {

  }

  clearTokenExpirationTimer(): void {

  }

  async signup(email: string, password: string) {

  }

  login(email: string, password: string) {

  }


  logout() {
  }

  retrieveUserData() {
  }

  ngOnDestroy() {
  }
}

