import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { HubUsersComponent } from './hubUsers.component';
import { TweetsRepliedTweetsComponent } from './tweetsRepliedTweets/tweetsRepliedTweets.component';
import { FrontSideComponent } from './tweetsRepliedTweets/front-side/front-side.component';
import { ChartHeaderComponent } from './tweetsRepliedTweets/header/header.component';

const components = [
  HomeComponent,
  HubUsersComponent,
  TweetsRepliedTweetsComponent,
  FrontSideComponent,
  ChartHeaderComponent
];

@NgModule({
  imports: [
    ThemeModule, ChartModule,
  ],
  declarations: [...components]
})
export class HomeModule { }
