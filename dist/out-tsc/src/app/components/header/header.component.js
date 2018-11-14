var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MessageBusService } from '../../services/messagebus/messagebus.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(el, messageBus) {
        this.el = el;
        this.messageBus = messageBus;
        this.collapseExpand = 'expanded';
        this.openClose = 'closed';
    }
    HeaderComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if ((scrollPosition == componentPosition) && (this.openClose = 'closed')) {
            this.collapseExpand = 'expanded';
        }
        else {
            this.collapseExpand = 'collapsed';
            this.openClose = 'closed';
            this.mobileDrawerState = false;
            // console.log('Mobile drawer state is: ' + this.mobileDrawerState);
            // Send message to collapse name and header links
            this.messageBus.event.emit({
                'mobileDrawer': 'false'
            });
        }
    };
    HeaderComponent.prototype.mobileDrawerToggle = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if ((this.mobileDrawerState) && (scrollPosition == componentPosition)) {
            this.mobileDrawerState = false;
            console.log('Mobile drawer state is: ' + this.mobileDrawerState);
            this.openClose = 'closed';
            this.collapseExpand = 'expanded';
            // Send message to collapse name and header links
            this.messageBus.event.emit({
                'mobileDrawer': 'false'
            });
        }
        else if ((this.mobileDrawerState) && (scrollPosition != componentPosition)) {
            this.mobileDrawerState = false;
            console.log('Mobile drawer state is: ' + this.mobileDrawerState);
            this.openClose = 'closed';
        }
        else {
            this.mobileDrawerState = true;
            console.log('Mobile drawer state is: ' + this.mobileDrawerState);
            this.openClose = 'opened';
            this.collapseExpand = 'collapsed';
            // Send message to expand name and header links
            this.messageBus.event.emit({
                'mobileDrawer': 'true'
            });
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "checkScroll", null);
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            animations: [
                trigger('collapseExpand', [
                    state('expanded', style({ background: 'rgba(0,0,0,0)' })),
                    state('collapsed', style({ background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)' })),
                    transition('collapsed <=> expanded', [animate('300ms ease-in-out')])
                ]),
                trigger('openClose', [
                    state('closed, void', style({ height: '0px' })),
                    state('opened', style({ height: '*' })),
                    transition('closed <=> opened', [animate('300ms ease-in-out')])
                ])
            ]
        }),
        __metadata("design:paramtypes", [ElementRef, MessageBusService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map