import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { HubUsersComponent } from './hubUsers/hubUsers.component';
import { RetweetersComponent } from './retweeters/retweeters.component';
import { TweetsStatsBarsComponent } from './tweetsStatsBars/tweetsStatsBars.component';
import { TweetsStatsPieComponent } from './tweetsStatsPie/tweetsStatsPie.component';
import { ReTweetsStatsBarsComponent } from './retweetsStatsBars/retweetsStatsBars.component';
import { ReTweetsStatsPieComponent } from './retweetsStatsPie/retweetsStatsPie.component';
import { NgxPopoverCardModule } from '../../calendar/popover-calendar.module';

const components = [
  HomeComponent,
  HubUsersComponent,
  RetweetersComponent,
  TweetsStatsBarsComponent,
  TweetsStatsPieComponent,
  ReTweetsStatsBarsComponent,
  ReTweetsStatsPieComponent
];

@NgModule({
  imports: [
    ThemeModule, ChartModule,NgxPopoverCardModule
  ],
  declarations: [...components]
})
export class HomeModule { }
