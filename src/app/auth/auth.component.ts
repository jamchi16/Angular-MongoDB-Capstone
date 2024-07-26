import {Component} from '@angular/core';
import {AuthServiceService, AuthResponseData} from "./auth-service.service";
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from "@angular/common";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: null = null;

  constructor(private authService: AuthServiceService, private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: any, Observable;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)!;
    } else {
      authObs = this.authService.signup(email, password)!;
    }

    authObs.subscribe(
        (resData: any) => {
        this.isLoading = false;
        this.router.navigate(['/replays']);
      },
        (errorMessage: null) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
