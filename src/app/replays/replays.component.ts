import {Component, OnInit, OnDestroy} from '@angular/core';
import {ReplaySearchComponent} from "./replay-search/replay-search.component";
import {ReplayService} from "./replay.service";
import {HeaderService} from "../header/header.service";
import {Subscription} from "rxjs";
import {ReplayViewComponent} from "./replay-view/replay-view.component";
import {NgForOf, NgIf} from "@angular/common";
import {ReplaysResultsComponent} from "./replays-results/replays-results.component";
import {Replay} from "./replay.model";

@Component({
  selector: 'app-replays',
  standalone: true,
  imports: [
    ReplaySearchComponent,
    ReplayViewComponent,
    NgIf,
    NgForOf,
    ReplaysResultsComponent
  ],
  templateUrl: './replays.component.html',
  styleUrl: './replays.component.css'
})
export class ReplaysComponent implements OnInit, OnDestroy {
  isFavoriteDisplayed: Boolean = true;
  replays: any[] = [];
  replayData: any[] = [];
  subscription: Subscription;
  // @ts-ignore
  dataSubscription: Subscription;

  constructor(private replayService: ReplayService, private headerService: HeaderService) {
    this.subscription = this.headerService.displayChanged.subscribe((newValue: boolean) => {
      this.isFavoriteDisplayed = newValue;
    });
  }

   async ngOnInit() {
    this.replays = this.replayService.getReplayIds()
    if (this.replays.length === 0) {
      this.replayService.fetchReplays()
    }

    this.dataSubscription = this.replayService.replaysChanged
      .subscribe(
        async (replays: Replay[]) => {
          this.replayData = await this.replayService.getReplays();
        }
      );
    this.replayData = await this.replayService.getReplays();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.dataSubscription.unsubscribe()
  }
}
