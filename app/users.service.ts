import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Injectable()

export class UsersService{
    private getUrl = 'https://jsonplaceholder.typicode.com/users';
    private postUrl = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http) {
        
    }
    getUsers(){
        return this._http.get(this.getUrl).map(res => res.json());
    }

    getUser(id){
        return this._http.get(this.getUrl+'/'+id).map(res => res.json());
    }

    addUser(user){
		return this._http.post(this.postUrl, JSON.stringify(user))
			.map(res => res.json());
	}

    updateUser(user){
        return this._http.put(this.getUrl+'/'+user.id, JSON.stringify(user))
			.map(res => res.json());
    }
    deleteUser(id){
		return this._http.delete(this.getUrl+'/'+id)
			.map(res => res.json());
	}
}