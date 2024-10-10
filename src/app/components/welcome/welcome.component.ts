import { Component } from '@angular/core';
import { ConfigPrimeModule } from '../../config-prime/config-prime.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ConfigPrimeModule, NgFor],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  dropdownOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];

  selectedOptions: any[] = [];

  toggleOption(option: any): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
  }
}
