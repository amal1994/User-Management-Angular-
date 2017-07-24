import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Injectable()

export class PostsService{
    private postUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private _http:Http){

    }

    getPosts(filter){
        var url=this.postUrl;
        if(filter && filter.userId){
            url+='?userId='+filter.userId;
        }
        return this._http.get(url).map(res => res.json());
    }
}