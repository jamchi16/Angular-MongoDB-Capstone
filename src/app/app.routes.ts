import {Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";
import {ReplaysComponent} from "./replays/replays.component";

export const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'confirm-email', component: AuthComponent},
  {path: '', redirectTo: '/replays', pathMatch: 'full'},
  {
    path: 'replays',
    component: ReplaysComponent,
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: '/auth'}
];
