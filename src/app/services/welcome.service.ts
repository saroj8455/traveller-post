import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor() {}

  greet() {
    return 'Hello, Welcome to Angular!';
  }
}
