import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private breadItems = new BehaviorSubject<MenuItem[]>([
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' },
  ]);
  breadItems$ = this.breadItems.asObservable();

  constructor() {}

  setBreadItems(inputBreadItems: MenuItem[]) {
    this.breadItems.next(inputBreadItems);
  }
}
