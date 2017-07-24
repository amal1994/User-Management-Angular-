import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {  HttpModule, JsonpModule } from '@angular/http';
import {routing} from './app.routing';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import { AppComponent }   from './app.component';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {addNewUserComponent} from './addNewUser.component';
import {PostsComponent} from './posts.component';
import {PageNotFoundComponent} from './pageNotFound.component';
import {LoaderComponent} from './loader.component';
import {PaginationComponent} from './pagination.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule, routing, HttpModule, JsonpModule ],
  declarations: [ AppComponent,NavbarComponent,HomeComponent,UsersComponent,addNewUserComponent,
                PostsComponent,PageNotFoundComponent,LoaderComponent,PaginationComponent],
  providers:    [CanDeactivateGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
