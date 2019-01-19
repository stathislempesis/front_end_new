import { NgModule } from '@angular/core';

import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { RetweetsComponent } from './retweets/retweets.component';
import { NumRetweetsComponent } from './retweets/numRetweets.component';
import { RepliesComponent } from './replies/replies.component';
import { NumRepliesComponent } from './replies/numReplies.component';
import { NgxPopoverCardComponent } from './replies/popover-example.component';

const components = [
  RetweetsComponent,
  NumRetweetsComponent,
  RepliesComponent,
  NumRepliesComponent,
  DashboardComponent,
  NgxPopoverCardComponent
];

const ENTRY_COMPONENTS = [
  NgxPopoverCardComponent
];

@NgModule({
  imports: [
    ThemeModule,DashboardRoutingModule, NgxChartsModule, ChartModule 
  ],
  declarations: [...components],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ]
})
export class DashboardModule { }
