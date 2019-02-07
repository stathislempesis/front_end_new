import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { HubUsersComponent } from './hubUsers/hubUsers.component';
import { TweetsStatsBarsComponent } from './tweetsStatsBars/tweetsStatsBars.component';
import { NgxPopoverCardModule } from '../../calendar/popover-calendar.module';
const components = [
  HomeComponent,
  HubUsersComponent,
  TweetsStatsBarsComponent
];

@NgModule({
  imports: [
    ThemeModule, ChartModule,NgxPopoverCardModule
  ],
  declarations: [...components]
})
export class HomeModule { }
