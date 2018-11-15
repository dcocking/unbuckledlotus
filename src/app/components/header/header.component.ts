import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { animate, state, style, transition, trigger, keyframes, query, stagger } from '@angular/animations';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageBusService } from '../../services/messagebus/messagebus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [

    trigger('headerScroll', [
      state('home', style({ background: 'rgba(0,0,0,0)' })),
      state('away', style({ background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)' })),
      transition('home <=> away', [
        query(':self', [
          animate('300ms ease-in-out')
        ])
      ])
    ]),

    trigger('lightningStrike', [
      state('on', style({ 
        'color': '#FCDC3E',
         transform: 'translateY(0)'
      })),
      state('off', style({
        'color': '#000',
        transform: 'translateY(0)'
      })),
      transition('on => off', [
        style({ 'color': '#FCDC3E'}),
        query(':self', [
          animate('300ms ease-in-out', style({
            'color': '#000',
          }))
        ])
      ]),
      transition('off => on', [
        style({ 'color': '#000', transform:'translateY(-100px)' }),
        query(':self', [
          animate('300ms ease-in-out', style({
            'color': '#FCDC3E',
            transform: 'translateY(0px)'
          }))
        ])
      ])

    ])
  ]
})

export class HeaderComponent implements OnInit {

  // collapseExpand: string = 'expanded';
  // mobileDrawerState: boolean;  
  // openClose: string = 'closed';
  // lightningState: string = 'home';

  headerState: string = 'home';
  lightningState: string = 'off';

  constructor(private el: ElementRef, private messageBus: MessageBusService) { }

  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition > componentPosition) {
      this.headerState = 'away';
      this.lightningState = 'on';
      console.log(this.headerState, this.lightningState);
    } else {
      this.headerState = 'home';
      this.lightningState = 'off';
      console.log(this.headerState, this.lightningState);
    }
  }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset
  //   if ((scrollPosition == componentPosition) && (this.openClose = 'closed')) {
  //     this.collapseExpand = 'expanded';
  //   } else {
  //     this.collapseExpand = 'collapsed';
  //     this.openClose = 'closed';
  //     this.mobileDrawerState = false;
  //     // console.log('Mobile drawer state is: ' + this.mobileDrawerState);
  //     // Send message to collapse name and header links
  //     this.messageBus.event.emit({
  //       'mobileDrawer': 'false'
  //     });
  //   }
  // }

  // mobileDrawerToggle() {
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset

  //   if ((this.mobileDrawerState) && (scrollPosition == componentPosition)) {
  //     this.mobileDrawerState = false;
  //     console.log('Mobile drawer state is: ' + this.mobileDrawerState);
  //     this.openClose ='closed';
  //     this.collapseExpand = 'expanded';

  //     // Send message to collapse name and header links
  //     this.messageBus.event.emit({
  //       'mobileDrawer': 'false'
  //     });

  //   } else if ((this.mobileDrawerState) && (scrollPosition != componentPosition)) {
  //     this.mobileDrawerState = false;
  //     console.log('Mobile drawer state is: ' + this.mobileDrawerState);
  //     this.openClose = 'closed';

  //   } else {
  //     this.mobileDrawerState = true;
  //     console.log('Mobile drawer state is: ' + this.mobileDrawerState);
  //     this.openClose = 'opened';
  //     this.collapseExpand = 'collapsed';

  //     // Send message to expand name and header links
  //     this.messageBus.event.emit({
  //       'mobileDrawer': 'true'
  //     });
  //   } 
  // }

  ngOnInit() {
  }

}
