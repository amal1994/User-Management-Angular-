import { Component,OnInit } from '@angular/core';
import {UsersService} from './users.service';

@Component({
    template:`<h1>Users</h1>
            <p>
                <a routerLink="/users/new" class="btn btn-primary">Add New User</a>
            </p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            User
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    <tr>
                </thead>

                <tbody>
                    <tr *ngFor='let user of users'>
                        <td>
                            {{user.name}}
                        </td>
                        <td>
                            {{user.email}}
                        </td>
                        <td>
                            <a routerLink="/users/{{user.id}}">
                                <i class="glyphicon glyphicon-edit"></i>
                            </a>
                        </td>
                        <td>
                            <a>
                                <i (click)="deleteUser(user)" class="glyphicon glyphicon-remove"></i>
                            </a>
                        </td>
                    <tr>
                </tbody>

            </table>

    `
})
export class UsersComponent implements OnInit{
  private users:any[];
  constructor(private usersService: UsersService){

  } 

  ngOnInit(){
    this.usersService.getUsers().subscribe(users=>this.users=users);
  }
  deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this.usersService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
}