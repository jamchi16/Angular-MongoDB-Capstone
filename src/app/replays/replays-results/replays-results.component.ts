import {Component, Input, Renderer2, OnInit} from '@angular/core';
import {ReplayViewService} from "../replay-view/replay-view.service";
import {ReplayService} from "../replay.service";
import {Replay} from "../replay.model";
import {formatDate, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-replays-results',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './replays-results.component.html',
  styleUrl: './replays-results.component.css'
})
export class ReplaysResultsComponent implements OnInit {
  @Input() result: any;
  replayIDs: Replay[] = []
  isFavorite: boolean = false

  constructor(
    private replayService: ReplayService,
    private replayViewService: ReplayViewService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.replayIDs = this.replayService.getReplayIds()
    if (this.replayIDs && this.replayIDs.includes(this.result['id'])) {
      this.isFavorite = true
    }
  }

  convertUnixTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  favoritesToggle(event: MouseEvent, iconElement: HTMLElement) {
    const battleID = this.result['id'];

    if (iconElement.classList.contains('fa-regular')) {
      this.replayService.addReplay(battleID)
      this.renderer.removeClass(iconElement, 'fa-regular');
      this.renderer.addClass(iconElement, 'fa-solid');
    } else {
      this.replayService.deleteReplay(battleID)
      this.renderer.removeClass(iconElement, 'fa-solid');
      this.renderer.addClass(iconElement, 'fa-regular');
    }

    event.stopPropagation();
  }

  openReplay(): void {
    const battleID = this.result['id'];
    const iFrameURL = `https://replay.pokemonshowdown.com/${battleID}`;
    this.replayViewService.updateIframeSource(iFrameURL);
  }

  protected readonly formatDate = formatDate;
}
