import {Component, OnDestroy} from '@angular/core';
import {ReplayViewService} from './replay-view.service';
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-replay-view',
  standalone: true,
  templateUrl: './replay-view.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./replay-view.component.css']
})
export class ReplayViewComponent implements OnDestroy {
  iframeSource: any = "";
  private subscription: Subscription;

  constructor(private iframeService: ReplayViewService, private sanitizer: DomSanitizer) {
    this.subscription = this.iframeService.iframeSource$.subscribe(newSource => {
      this.iframeSource = this.sanitizer.bypassSecurityTrustResourceUrl(newSource);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
