import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMultiSelect]',
  standalone: true,
})
export class MultiSelectDirective {
  @Input()
  options: any[] = [];
  selectedOptions: any[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  toggleDropdown(event: Event): void {
    const dropdown = this.el.nativeElement.querySelector('.dropdown-list');
    if (dropdown) {
      const isVisible = dropdown.style.display === 'block';
      this.renderer.setStyle(dropdown, 'display', isVisible ? 'none' : 'block');
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      const dropdown = this.el.nativeElement.querySelector('.dropdown-list');
      if (dropdown) {
        this.renderer.setStyle(dropdown, 'display', 'none');
      }
    }
  }

  toggleOption(option: any): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
    console.log('Selected Options:', this.selectedOptions);
  }
}
