import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigPrimeModule } from './config-prime/config-prime.module';
import { MenuItem } from 'primeng/api';
import { CommonService } from './services/common.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfigPrimeModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'traveller-post';
  items: MenuItem[] = [];

  private commonService = inject(CommonService);
  private userService = inject(UserService);
  bredItems$ = this.commonService.breadItems$;
  breadItems: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  user$ = this.userService.user$;

  ngOnInit(): void {
    this.breadItems = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ];

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
        routerLink: 'about',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        routerLink: 'posts',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: 'contact',
      },
    ];
  }

  ngAfterViewInit(): void {
    // Update breadcrumb item after 5 sec
    setTimeout(() => {
      this.commonService.setBreadItems([{ label: 'Electronics' }]);
    }, 5000);
  }
}
