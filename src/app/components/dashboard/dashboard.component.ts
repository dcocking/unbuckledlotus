import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger, group, query, stagger} from '@angular/animations';
import { MatTableDataSource, MatInputModule, MatFormField, MatTable, MatSort, MatButton, MatSlider, MatToolbar } from '@angular/material';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

test: boolean = false;
fullName: string = `Dustin Cocking`;
age: number = 29;
sentance: string = `Hello my name is ${ this.fullName }. I'll be ${ this.age + 1 } years old tomorrow :)`;

list: number[] = [1, 2 ,3];
myObj = {size: 10, label: "Size 10 Object"};

  constructor() { }

  ngOnInit() {
  }

}
