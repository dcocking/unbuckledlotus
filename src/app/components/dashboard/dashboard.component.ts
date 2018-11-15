import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger, group, query, stagger } from '@angular/animations';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentState;

  showHide() {
    this.currentState = !this.currentState;
    // console.log(this.currentState);
  }

  constructor() { }

  ngOnInit() {
  }

}
