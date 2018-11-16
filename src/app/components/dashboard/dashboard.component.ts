import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger, group, query, stagger} from '@angular/animations';
import { MatTableDataSource, MatInputModule, MatFormField, MatTable, MatSort, MatButton, MatSlider, MatToolbar } from '@angular/material';
import { MaterialModule } from '../../../material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from '../toolbar/toolbar.component';

export interface WalletElement {
  type: string;
  eth: number;
  weth: number;
  dai: number;
  usdequiv: number;
  cdpsopen: number;
}

const WALLET_DATA: WalletElement[] = [
  {type: 'Metamask', eth: 3.71, weth: 0, dai: 13, usdequiv: 756.84, cdpsopen: 1 }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[]= ['type', 'eth', 'weth', 'dai', 'usdequiv', 'cdpsopen'];
  dataSource = WALLET_DATA;

  @ViewChild(MatSort) sort: MatSort;  

  currentState;

  showHide() {
    this.currentState = !this.currentState;
    // console.log(this.currentState);
  }

  constructor() { }

  ngOnInit() {
  }

}
