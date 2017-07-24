import { Component ,OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {PostsService} from './posts.service';
import {CommentsService} from './comments.service';
import {RandomNumberService} from './get-random-number.service';
import {PaginationComponent} from './pagination.component';
import 'rxjs/add/operator/filter';

@Component({
    template:`  <h1>Posts</h1>
                <div class="row posts">
                    <div class="col-md-6">
                        <div class="form-group">
                            <select #select (change)="reloadPosts({userId:select.value})" class="form-control" id="selectedUser">
                                <option value="">Please select User</option>
                                <option value="{{user.id}}" *ngFor="let user of users">{{user.name}}</option>
                            </select>
                        </div>
                        <pagination [items]="posts"	[pageSize]="pageSize" (page-changed)="changePage($event)"></pagination>
                        <div>
                            <spinner [visible]="postsLoading"></spinner>
                        </div>
                        
                        <ul class="list-group">
                            <li *ngFor="let post of pagedPosts" [class.active]="selectedPost == post" (click)="selectPost(post)" class="list-group-item">{{post.title}}</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div *ngIf="selectedPost">
                            <div class="panel panel-default">
                                <div class="panel-heading">{{selectedPost.title}}</div>
                                <div class="panel-body">
                                    {{selectedPost.body}}
                                </div>
                                <spinner [visible]="commentsLoading"></spinner>
                                <div *ngFor="let comment of selectedPost.comments">
                                    <div class="media">
                                        <div class="media-left">
                                            <a>
                                            <img class="media-object" src="http://lorempixel.com/80/80/sports/?random={{comment.id}}" alt="...">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">{{comment.name}}</h4>
                                            {{comment.body}}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    `,
    styles:[`
        .posts	li	{	cursor:	pointer;	}
        .posts	li:hover	{	background:	#ecf0f1;	}	
        .list-group-item.active,	
        .list-group-item.active:hover,	
        .list-group-item.active:focus	{	
            background-color:	#ecf0f1;
            border-color:	#ecf0f1;	
            color:	#2c3e50;
        }
        
  `],
  providers:[PostsService,CommentsService]
})
export class PostsComponent implements OnInit{
    posts=[];
    pagedPosts=[];
    postsLoading;
    pageSize=10;
    commentsLoading=true;
    users:any[];
    selectedPost;
    selectedUser='hthjyktul';
    constructor(private usersService:UsersService,
    private postsService:PostsService,
    private commentsService:CommentsService,
    private randomNumberService:RandomNumberService
    ){
        
    }

    reloadPosts(userId){
         this.loadPosts(userId);
    }
    
    loadUsers(){
        this.usersService.getUsers().subscribe(users=> this.users = users);
    }

    loadPosts(filter?){
        this.postsLoading=true;
        this.postsService.getPosts(filter).subscribe(data =>{
             this.posts = data;
             this.pagedPosts=_.take(this.posts,this.pageSize);
            }
             ,null,
                () => { this.postsLoading = false;}
        );
    }

    ngOnInit(){
        this.loadUsers();
        this.loadPosts();
    }

    selectPost(post){
        this.selectedPost = post;
        this.commentsLoading=true;
        this.commentsService.getComments(post.userId).subscribe(comments =>{
             this.selectedPost.comments = comments}
             ,null,
                () => { this.commentsLoading = false;}
        );
    }

    changePage(currentPage){
        var startingIndex=((currentPage-1)*this.pageSize);
        this.pagedPosts = _.take(_.rest(this.posts,startingIndex),this.pageSize);
    }

    
}