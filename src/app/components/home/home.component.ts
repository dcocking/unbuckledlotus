import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger, group, query, stagger } from '@angular/animations';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  // animations: [

  //   trigger('openClose', [

  //     transition(':enter', [
  //       style({ opacity: 0, height: 0 }),
  //       animate('300ms ease-in-out', style({ opacity: 1, height: 200 })),
  //     ]),

  //     transition(':leave', [
  //       style({ opacity: '*', height: '*' }),
  //       animate('300ms ease-in-out', style({ opacity: 0, height: 0 })),
  //     ])
  //   ]),

  //   trigger('slideIn', [

  //     transition(':enter', [
  //       query('.content', [
  //         style({ opacity: 0, transform: 'translateX(-100px)' }),
  //         stagger(250, [
  //           animate('300ms ease-in-out', style({ opacity: 1, transform: 'none' })),
  //         ]),
  //       ])
  //     ]),

  //     transition(':leave', [
  //       query('.content', [
  //         stagger(250, [
  //           animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100px)' })),
  //         ]),
  //       ])
  //     ])
  //   ])
  // ]
})

export class HomeComponent implements OnInit {

  currentState;

  showHide() {
    this.currentState = !this.currentState;
    // console.log(this.currentState);
  }

  constructor() { }

  ngOnInit() {
  }

}
