import { Component } from '@angular/core';
import { ConfigPrimeModule } from '../../config-prime/config-prime.module';

@Component({
  selector: 'app-common-error',
  standalone: true,
  imports: [ConfigPrimeModule],
  templateUrl: './common-error.component.html',
  styleUrl: './common-error.component.css',
})
export class CommonErrorComponent {}
