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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_1 = require("./user");
var EmailValidators_1 = require("./EmailValidators");
var users_service_1 = require("./users.service");
var addNewUserComponent = (function () {
    function addNewUserComponent(fb, _router, _activatedRouter, _usersService) {
        this.fb = fb;
        this._router = _router;
        this._activatedRouter = _activatedRouter;
        this._usersService = _usersService;
        this.user = new user_1.User();
        this.createForm();
    }
    addNewUserComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            username: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    EmailValidators_1.EmailValidators.validEmail
                ])],
            phone: [],
            address: this.fb.group({
                street: [],
                suite: [],
                city: [],
                zipCode: []
            })
        });
    };
    addNewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRouter.params.subscribe(function (params) {
            _this.routeParamId = +params["id"];
            (_this.routeParamId) ? (_this.title = 'Edit User') : (_this.title = 'Add New User');
            if (!_this.routeParamId) {
                return;
            }
            _this._usersService.getUser(_this.routeParamId).subscribe(function (user) {
                _this.user = user;
            }, function (response) {
                if (response.status == 404) {
                    _this._router.navigate(['NotFound']);
                }
            });
        });
    };
    addNewUserComponent.prototype.onSubmit = function () {
        var _this = this;
        var result;
        if (this.user.id) {
            result = this._usersService.updateUser(this.user);
        }
        else {
            result = this._usersService.addUser(this.user);
            result.subscribe(function (x) {
                _this.userForm.reset();
                _this._router.navigate(['users']);
            });
        }
    };
    addNewUserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/addNewUser.component.html',
            providers: [users_service_1.UsersService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router,
            router_1.ActivatedRoute,
            users_service_1.UsersService])
    ], addNewUserComponent);
    return addNewUserComponent;
}());
exports.addNewUserComponent = addNewUserComponent;
//# sourceMappingURL=addNewUser.component.js.map