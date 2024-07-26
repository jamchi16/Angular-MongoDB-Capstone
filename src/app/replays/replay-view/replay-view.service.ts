import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplayViewService {
  private iframeSourceSubject = new BehaviorSubject<string>("");
  iframeSource$ = this.iframeSourceSubject.asObservable();

  updateIframeSource(newSource: string) {
    this.iframeSourceSubject.next(newSource);
  }
}

