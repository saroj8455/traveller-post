import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  timezone: string;
  profile?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User | null>({
    username: 'jhondeo',
    timezone: 'UTC',
    profile: 'Jhon Deo',
  });
  user$ = this.user.asObservable();

  constructor() {}

  isAuthenticated(username: string) {
    return username === 'admin';
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
