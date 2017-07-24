"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var users_component_1 = require("./users.component");
var addNewUser_component_1 = require("./addNewUser.component");
var posts_component_1 = require("./posts.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var can_deactivate_guard_service_1 = require("./can-deactivate-guard.service");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/:id',
        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
        component: addNewUser_component_1.addNewUserComponent },
    { path: 'users/new',
        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
        component: addNewUser_component_1.addNewUserComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'NotFound', component: pageNotFound_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: 'NotFound' }
]);
//# sourceMappingURL=app.routing.js.map