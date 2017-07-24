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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.items = [];
        this.pageChanged = new core_1.EventEmitter();
        this.pagination = false;
        this.currentPage = 1;
        this.pages = [];
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        if (this.items) {
            if (this.items.length > this.pageSize) {
                this.pages = [];
                this.pagination = true;
                for (var i = 1; i <= Math.ceil(this.items.length / this.pageSize); i++) {
                    this.pages.push(i);
                }
            }
            else {
                this.pagination = false;
            }
        }
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length) {
            return;
        }
        else {
            this.currentPage++;
            this.pageChanged.emit(this.currentPage);
        }
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage == 1) {
            return;
        }
        else {
            this.currentPage--;
            this.pageChanged.emit(this.currentPage);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Output('page-changed'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "\n        <ul *ngIf=\"pagination\" class=\"pagination\">\n            <li [class.disabled]=\"currentPage==1\" (click)=\"previous()\"><a>&laquo;</a></li>\n            <li *ngFor=\"let page of pages\" (click)=\"changePage(page)\" [class.active]=\"currentPage==page\">    \n                <a>\n                    {{page}}\n                </a>\n            </li>\n            <li [class.disabled]=\"currentPage==pages.length\" (click)=\"next()\"><a>&raquo;</a></li>\n        </ul>\n    "
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map