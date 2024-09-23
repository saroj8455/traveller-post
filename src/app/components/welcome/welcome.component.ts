import { Component } from '@angular/core';
import { ConfigPrimeModule } from '../../config-prime/config-prime.module';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ConfigPrimeModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
