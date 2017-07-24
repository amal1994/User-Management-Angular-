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
var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);
            this.usersService.deleteUser(user.id)
                .subscribe(null, function (err) {
                alert("Could not delete the user.");
                // Revert the view back to its original state
                // by putting the user object at the index
                // it used to be.
                _this.users.splice(index, 0, user);
            });
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            template: "<h1>Users</h1>\n            <p>\n                <a routerLink=\"/users/new\" class=\"btn btn-primary\">Add New User</a>\n            </p>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th>\n                            User\n                        </th>\n                        <th>\n                            Email\n                        </th>\n                        <th>\n                            Edit\n                        </th>\n                        <th>\n                            Delete\n                        </th>\n                    <tr>\n                </thead>\n\n                <tbody>\n                    <tr *ngFor='let user of users'>\n                        <td>\n                            {{user.name}}\n                        </td>\n                        <td>\n                            {{user.email}}\n                        </td>\n                        <td>\n                            <a routerLink=\"/users/{{user.id}}\">\n                                <i class=\"glyphicon glyphicon-edit\"></i>\n                            </a>\n                        </td>\n                        <td>\n                            <a>\n                                <i (click)=\"deleteUser(user)\" class=\"glyphicon glyphicon-remove\"></i>\n                            </a>\n                        </td>\n                    <tr>\n                </tbody>\n\n            </table>\n\n    "
        }),
        __metadata("design:paramtypes", [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map