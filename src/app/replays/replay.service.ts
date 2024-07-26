import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Replay} from "./replay.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthServiceService} from "../auth/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class ReplayService {
  replaysChanged = new Subject<Replay[]>();
  private replays: Replay[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {
  }

  async getReplays() {
    let replayData: any[] = []
    if (this.replays.length > 0) {
      this.replays.forEach(id => {
        this.http
          .get(`https://replay.pokemonshowdown.com/${id}.json`)
          .subscribe(results => {
            replayData.push(results)
          })
      })
    }
    return replayData;
  }

  getReplayIds() {
    return this.replays
  }

  addReplay(replay: Replay) {
    this.replays.push(replay);
    this.replaysChanged.next(this.replays.slice());
    this.storeReplays()
  }

  deleteReplay(index: number) {
    this.replays.splice(index, 1);
    this.replaysChanged.next(this.replays.slice());
    this.storeReplays()
  }

  storeReplays() {

  }

  fetchReplays() {

  }
}
