import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class CommentsService{
    private url;
    constructor(private _http:Http){
    }

    convertToCommentsUrl(id){
        return 'https://jsonplaceholder.typicode.com/posts'+'/'+id+'/comments';
    }

    getComments(id){
        this.url = this.convertToCommentsUrl(id);
        console.log(this.url);
        return this._http.get(this.url).map(results => results.json());
    }
}