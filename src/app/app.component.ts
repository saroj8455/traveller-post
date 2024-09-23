import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigPrimeModule } from './config-prime/config-prime.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfigPrimeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'traveller-post';
}
