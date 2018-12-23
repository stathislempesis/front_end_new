import { NgModule } from '@angular/core';

import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { RetweetsComponent } from './retweets/retweets.component';
import { RepliesComponent } from './replies/replies.component';

const components = [
  RetweetsComponent,
  RepliesComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    ThemeModule,NgxChartsModule,DashboardRoutingModule
  ],
  declarations: [...routedComponents, ...components],
})
export class DashboardModule { }
