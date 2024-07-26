import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ReplayViewComponent} from "./replays/replay-view/replay-view.component";
import {AuthServiceService} from "./auth/auth-service.service"
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

AuthServiceService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HttpClientModule, ReplayViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular_capstone';

  constructor(private authService: AuthServiceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
