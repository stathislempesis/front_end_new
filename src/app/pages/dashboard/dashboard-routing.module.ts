import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RepliesComponent } from './replies/replies.component';
import { RetweetsComponent } from './retweets/retweets.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'retweets',
    component: RetweetsComponent,
  }, {
    path: 'replies',
    component: RepliesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [
  RetweetsComponent,
  RepliesComponent
];
