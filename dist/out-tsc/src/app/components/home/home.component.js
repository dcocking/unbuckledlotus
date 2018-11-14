var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { animate, style, transition, trigger, query, stagger } from '@angular/animations';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.showHide = function () {
        this.currentState = !this.currentState;
        // console.log(this.currentState);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [
                trigger('openClose', [
                    transition(':enter', [
                        style({ opacity: 0, height: 0 }),
                        animate('300ms ease-in-out', style({ opacity: 1, height: 200 })),
                    ]),
                    transition(':leave', [
                        style({ opacity: '*', height: '*' }),
                        animate('300ms ease-in-out', style({ opacity: 0, height: 0 })),
                    ]),
                ]),
                trigger('slideIn', [
                    transition(':enter', [
                        query('.content', [
                            style({ opacity: 0, transform: 'translateX(-100px)' }),
                            stagger(250, [
                                animate('300ms ease-in-out', style({ opacity: 1, transform: 'none' })),
                            ]),
                        ])
                    ]),
                    transition(':leave', [
                        query('.content', [
                            stagger(250, [
                                animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100px)' })),
                            ]),
                        ])
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map