import { Component } from '@angular/core';
import {NavbarComponent} from './navbar.component';
import{UsersService} from './users.service';
import {PostsService} from './posts.service';
import {CommentsService} from './comments.service';
import {RandomNumberService} from './get-random-number.service';
@Component({
  selector: 'my-app',
  template: `
          <navbar></navbar>
          <div class="container">
            <router-outlet></router-outlet>
          </div>
  `,
  providers:[UsersService,PostsService,CommentsService,RandomNumberService]
})

export class AppComponent {


 }
