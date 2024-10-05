import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.setUser({
      username: 'bradtraversy',
      timezone: 'EST',
      profile: 'Brad Traversy',
    });
  }
}
