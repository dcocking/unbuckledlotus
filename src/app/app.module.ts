import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase Tools
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Angular Material Library
import { MaterialModule } from '../material/material.module'

// Services
import { MessageBusService } from './services/messagebus/messagebus.service';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { DatabaseService } from './services/database.service';
import { TemperatureService } from './services/temperature/temperature.service';

// Components

import { 
  HeaderComponent,
  FooterComponent,
  DashboardComponent,
} from './components';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    MessageBusService,
    DatabaseService,
    TemperatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
