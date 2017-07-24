import {Component,OnInit} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from './user';
import {EmailValidators} from './EmailValidators';
import {FormComponent} from './can-deactivate-guard.service';
import {UsersService} from './users.service';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl:'app/addNewUser.component.html',
    providers: [UsersService]
})

export class addNewUserComponent implements FormComponent,OnInit{
    userForm: FormGroup;
    title;
    routeParamId;
    user= new User();
    constructor(private fb: FormBuilder,private _router:Router,
    private _activatedRouter : ActivatedRoute,
    private _usersService:UsersService) { 
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({ // <-- the parent FormGroup
        username: ['', Validators.required ],
        email: ['', Validators.compose([
                Validators.required,
                EmailValidators.validEmail
            ]) ],
        phone: [],
      address: this.fb.group({ // <-- the child FormGroup
        street: [],
        suite:[],
        city: [],
        zipCode: []
      })
    });
  }

  ngOnInit(){
                
    this._activatedRouter.params.subscribe(params => {
      this.routeParamId= +params["id"];
      (this.routeParamId)?(this.title='Edit User'):(this.title='Add New User');
      if(!this.routeParamId){
        return;
      }
      this._usersService.getUser(this.routeParamId).subscribe(user => {
        this.user = user;
      },
       response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
      }
       });
       
    });
   
  }

  onSubmit(){
    var result;
    if(this.user.id){
      result= this._usersService.updateUser(this.user);
    }
    else{
      result = this._usersService.addUser(this.user);
      result.subscribe( x => {
            this.userForm.reset();
            this._router.navigate(['users']);
      });
    }
    
  }
}