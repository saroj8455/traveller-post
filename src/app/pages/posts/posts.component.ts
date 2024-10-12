import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Access {
  create: boolean;
  update?: boolean;
  delete?: boolean;
}

export interface Admin extends User, Access {
  role: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  jhon: Admin = {
    id: 1,
    name: 'Jhon Deo',
    email: 'jhondeo@gmail.com',
    role: 'CRUD',
    create: true,
  };
}

// 94371 - 50969 - Pradeep Sahu Sir
