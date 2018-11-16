import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { animate, state, style, transition, trigger, keyframes, query, stagger, group,  } from '@angular/animations';
import { MaterialModule } from '../../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageBusService } from '../../services/messagebus/messagebus.service';
import { ScrollDispatchModule, ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { MatSidenavModule, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})

export class SimulatorComponent implements AfterViewInit {

  fillerContent = Array(50).fill(0).map(() =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  constructor(private el: ElementRef, private messageBus: MessageBusService) {}

  @HostListener('window:scroll', ['$event'])

  ngAfterViewInit() {
  }
}
