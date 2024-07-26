import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private isFavoriteDisplayedSubject = new BehaviorSubject<boolean>(true);
  displayChanged = this.isFavoriteDisplayedSubject.asObservable();

  constructor() {}

  retrieveDisplayStatus(): boolean {
    return this.isFavoriteDisplayedSubject.value;
  }

  displayStatusChanged(): void {
    this.isFavoriteDisplayedSubject.next(!this.isFavoriteDisplayedSubject.value);
  }
}
