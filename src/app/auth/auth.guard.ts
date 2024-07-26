import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {AuthServiceService} from "./auth-service.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthServiceService, private router: Router) {}
}
