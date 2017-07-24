"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("./users.service");
var posts_service_1 = require("./posts.service");
var comments_service_1 = require("./comments.service");
var get_random_number_service_1 = require("./get-random-number.service");
require("rxjs/add/operator/filter");
var PostsComponent = (function () {
    function PostsComponent(usersService, postsService, commentsService, randomNumberService) {
        this.usersService = usersService;
        this.postsService = postsService;
        this.commentsService = commentsService;
        this.randomNumberService = randomNumberService;
        this.posts = [];
        this.pagedPosts = [];
        this.pageSize = 10;
        this.commentsLoading = true;
        this.selectedUser = 'hthjyktul';
    }
    PostsComponent.prototype.reloadPosts = function (userId) {
        this.loadPosts(userId);
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        this.postsLoading = true;
        this.postsService.getPosts(filter).subscribe(function (data) {
            _this.posts = data;
            _this.pagedPosts = _.take(_this.posts, _this.pageSize);
        }, null, function () { _this.postsLoading = false; });
    };
    PostsComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadPosts();
    };
    PostsComponent.prototype.selectPost = function (post) {
        var _this = this;
        this.selectedPost = post;
        this.commentsLoading = true;
        this.commentsService.getComments(post.userId).subscribe(function (comments) {
            _this.selectedPost.comments = comments;
        }, null, function () { _this.commentsLoading = false; });
    };
    PostsComponent.prototype.changePage = function (currentPage) {
        var startingIndex = ((currentPage - 1) * this.pageSize);
        this.pagedPosts = _.take(_.rest(this.posts, startingIndex), this.pageSize);
    };
    PostsComponent = __decorate([
        core_1.Component({
            template: "  <h1>Posts</h1>\n                <div class=\"row posts\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <select #select (change)=\"reloadPosts({userId:select.value})\" class=\"form-control\" id=\"selectedUser\">\n                                <option value=\"\">Please select User</option>\n                                <option value=\"{{user.id}}\" *ngFor=\"let user of users\">{{user.name}}</option>\n                            </select>\n                        </div>\n                        <pagination [items]=\"posts\"\t[pageSize]=\"pageSize\" (page-changed)=\"changePage($event)\"></pagination>\n                        <div>\n                            <spinner [visible]=\"postsLoading\"></spinner>\n                        </div>\n                        \n                        <ul class=\"list-group\">\n                            <li *ngFor=\"let post of pagedPosts\" [class.active]=\"selectedPost == post\" (click)=\"selectPost(post)\" class=\"list-group-item\">{{post.title}}</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div *ngIf=\"selectedPost\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">{{selectedPost.title}}</div>\n                                <div class=\"panel-body\">\n                                    {{selectedPost.body}}\n                                </div>\n                                <spinner [visible]=\"commentsLoading\"></spinner>\n                                <div *ngFor=\"let comment of selectedPost.comments\">\n                                    <div class=\"media\">\n                                        <div class=\"media-left\">\n                                            <a>\n                                            <img class=\"media-object\" src=\"http://lorempixel.com/80/80/sports/?random={{comment.id}}\" alt=\"...\">\n                                            </a>\n                                        </div>\n                                        <div class=\"media-body\">\n                                            <h4 class=\"media-heading\">{{comment.name}}</h4>\n                                            {{comment.body}}\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n    ",
            styles: ["\n        .posts\tli\t{\tcursor:\tpointer;\t}\n        .posts\tli:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        .list-group-item.active,\t\n        .list-group-item.active:hover,\t\n        .list-group-item.active:focus\t{\t\n            background-color:\t#ecf0f1;\n            border-color:\t#ecf0f1;\t\n            color:\t#2c3e50;\n        }\n        \n  "],
            providers: [posts_service_1.PostsService, comments_service_1.CommentsService]
        }),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            posts_service_1.PostsService,
            comments_service_1.CommentsService,
            get_random_number_service_1.RandomNumberService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map