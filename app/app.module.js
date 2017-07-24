"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var can_deactivate_guard_service_1 = require("./can-deactivate-guard.service");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar.component");
var home_component_1 = require("./home.component");
var users_component_1 = require("./users.component");
var addNewUser_component_1 = require("./addNewUser.component");
var posts_component_1 = require("./posts.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var loader_component_1 = require("./loader.component");
var pagination_component_1 = require("./pagination.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_1.routing, http_1.HttpModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent, users_component_1.UsersComponent, addNewUser_component_1.addNewUserComponent,
                posts_component_1.PostsComponent, pageNotFound_component_1.PageNotFoundComponent, loader_component_1.LoaderComponent, pagination_component_1.PaginationComponent],
            providers: [can_deactivate_guard_service_1.CanDeactivateGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map