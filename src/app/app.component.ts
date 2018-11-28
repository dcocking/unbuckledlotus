import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unbuckled-lotus';

  constructor(private db: DatabaseService) {
    db.getAppName().valueChanges().subscribe( appname => {
      console.log(appname);
    })
  }
}
