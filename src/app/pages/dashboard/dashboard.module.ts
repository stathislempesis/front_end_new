import { NgModule } from '@angular/core';

import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NgxPopoverCardModule } from '../../calendar/popover-calendar.module';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { RetweetsComponent } from './retweets/retweets.component';
import { NumRetweetsComponent } from './retweets/numRetweets.component';
import { RepliesComponent } from './replies/replies.component';
import { NumRepliesComponent } from './replies/numReplies.component';

const components = [
  RetweetsComponent,
  NumRetweetsComponent,
  RepliesComponent,
  NumRepliesComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    ThemeModule,DashboardRoutingModule, NgxChartsModule, ChartModule,NgxPopoverCardModule
  ],
  declarations: [...components]
})
export class DashboardModule { }
