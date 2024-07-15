import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupVisible = new BehaviorSubject<boolean>(false);

  constructor() {
    timer(10000).subscribe(() => {
      this.popupVisible.next(true);
    });
  }

  getPopupVisibility(): Observable<boolean> {
    return this.popupVisible.asObservable();
  }
}
