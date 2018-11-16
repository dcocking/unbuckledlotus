import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent, HomeComponent, ToolbarComponent, DashboardComponent, MonitorComponent, SimulatorComponent} from './components';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'monitor', component: MonitorComponent},
  { path: 'simulator', component: SimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
