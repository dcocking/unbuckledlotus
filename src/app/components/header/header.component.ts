import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { animate, state, style, transition, trigger, keyframes, query, stagger, group } from '@angular/animations';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageBusService } from '../../services/messagebus/messagebus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [

    trigger('headerScroll', [
      state('home', style({
        background: 'rgba(0,0,0,0)'
      })),
      state('away', style({
        background: 'rgba(0,0,0,0.8)',
        'box-shadow': '0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)'
      })),
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
        style({ 'color': '#FCDC3E' }),
        query(':self', [
          animate('300ms ease-in-out', style({
            'color': '#000',
          }))
        ])
      ]),
      transition('off => on', [
        style({ 'color': '#000', transform: 'translateY(-100px)', opacity: 0 }),
        query(':self', [
          group([
            animate('300ms ease-in', style({
              transform: 'translateY(10px)',
            })),
            animate('300ms ease-in', style({
              'color': '#FAFC37',
              opacity: 1,
            }))
          ]),
          animate('100ms ease-out', style({
            transform: 'translateY(0px)',
          })),
          animate('300ms ease-out', style({
            'color': '#FCDC3E',
          })),
        ])
      ])

    ]),

    trigger('glowLinks', [
      state('home', style({
        'color': '#000'
      })),
      state('away', style({
        'color': '#FCDC3E'
      })),
      transition('home <=> away', [
        query(':self', [
          animate('300ms ease-in-out', )
        ])
      ]),
    ]),
  ]
})

export class HeaderComponent implements OnInit {

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

  ngOnInit() {
  }

}
