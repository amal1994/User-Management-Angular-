import { Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {addNewUserComponent} from './addNewUser.component';
import {PostsComponent} from './posts.component';
import {PageNotFoundComponent} from './pageNotFound.component'
import {CanDeactivateGuard} from './can-deactivate-guard.service';


export const routing = RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'users/:id',
    canDeactivate:[CanDeactivateGuard],
    component:addNewUserComponent},
    {path:'users/new',
    canDeactivate:[CanDeactivateGuard],
    component:addNewUserComponent},
    {path:'posts',component:PostsComponent},
    {path:'NotFound',component:PageNotFoundComponent},
    {path:'**',redirectTo: 'NotFound'}
]);