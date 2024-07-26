import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthServiceService} from "../auth/auth-service.service";
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ReplayService} from "../replays/replay.service";
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isFavoriteDisplayed: boolean = true

  constructor(
    private authService: AuthServiceService,
    private headerService: HeaderService
  ) {


  }

  ngOnInit() {
    this.isFavoriteDisplayed = this.headerService.retrieveDisplayStatus()
  }

  async onLogout() {
    await this.authService.logout();
  }

  ngOnDestroy() {
  }

  changeDisplay() {
    this.headerService.displayStatusChanged()
  }

}
