import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Library
import { MaterialModule } from '../material/material.module'

// Services
import { MessageBusService } from './services/messagebus/messagebus.service';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

// Components

import { 
  HeaderComponent,
  FooterComponent,
  DashboardComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    MessageBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
