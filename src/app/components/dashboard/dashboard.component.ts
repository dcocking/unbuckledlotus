import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger, group, query, stagger } from '@angular/animations';
import { MatTableDataSource, MatInputModule, MatFormField, MatTable, MatSort, MatButton, MatSlider, MatToolbar } from '@angular/material';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../services/database.service';
import { TemperatureService } from '../../services/temperature/temperature.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  appname;

  constructor(private db: DatabaseService, private temp: TemperatureService) {
    db.getAppName().valueChanges().subscribe(appname => {
      this.appname = appname;
      // temp.checkTemperature();
    });
  }

  ngOnInit() {
  }

}
