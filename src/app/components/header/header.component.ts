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

    // trigger('collapseExpand', [
    //   state('expanded', style({background: 'rgba(0,0,0,0)'})),
    //   state('collapsed', style({background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)'})),
    //   transition('collapsed <=> expanded', [animate('300ms ease-in-out')])
    // ]),

    trigger('lightningStrike', [
      transition('off => on', [
        query(':self', style({ background: 'rgba(0,0,0,0)', 'box-shadow': 'none' })),
        query('i', style({ opacity: 0, transform: 'translateY(-100px)', color: '#000' })),
        query(':self', animate('300ms ease-in-out', style({ background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)' }))),
        query('i', animate(1000, style({ opacity: 1, transform: 'none', color: '#FBDA4E' }))),
      ]),
      transition('on => off', [
        query(':self', style({ background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)' })),
        query('i', style({ opacity: 1, transform: 'none', color: '#FBDA4E' })),
        query(':self', animate('300ms ease-in-out', style({ background: 'rgba(0,0,0,0)', 'box-shadow': 'none' }))),
        query('i', animate(1000, style({ opacity: 1, transform: 'none', color: '#000' }))),
      ]),
    ])

    // trigger('headerScroll', [
    //   state('home', style({ background: 'rgba(0,0,0,0)' })),
    //   state('away', style({ background: 'rgba(0,0,0,0.8)', 'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)' })),
    //   transition('home <=> away', [
    //     query(':self', [
    //       animate('300ms ease-in-out')
    //     ])
    //   ])
    // ]),

  //   trigger('lightningStrike', [
  //     transition('* => *', [
  //       query(':self', [
  //         style({ opacity: 0, transform: 'translateY(-100px)' }),
  //         stagger(-30, [
  //           animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
  //         ])
  //       ])
  //     ])
  //   ]),
  // ]

    //     trigger('pageAnimations', [
    //   transition(':enter', [
    //     query('.hero, form', [
    //       style({opacity: 0, transform: 'translateY(-100px)'}),
    //       stagger(-30, [
    //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
    //       ])
    //     ])
    //   ])
    // ]),

    // trigger('lightningStrike', [
    //   state('off', style({ 'color': '#000', transform:'scale(1)'})),
    //   state('on', style({ 'color': '#FBDA4E', transform:'scale(1.2)'})),
    //   transition('off <=> on', [animate('300ms ease-in-out')])
    // ]),

    // trigger('lightning', [
    //   state('attack', style({color:'#FBDA4E', transform:'translateY(0)'})),
    //   state('home', style({color:'#000', transform:'translateY(-100)'})),
    //   transition('attack <=> home', [animate('300ms ease-in-out')])
    // ])

    // trigger('openClose', [
    //   state('closed, void', style({height: '0px'})),
    //   state('opened', style({height: '*'})),
    //   transition('closed <=> opened', [animate('300ms ease-in-out')]) 
    // ])  

  ]
})

export class HeaderComponent implements OnInit {

  // collapseExpand: string = 'expanded';
  // mobileDrawerState: boolean;  
  // openClose: string = 'closed';
  // lightningState: string = 'home';

  headerState: string = 'home';
  lightningState;

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
