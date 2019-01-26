import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeModule } from './home/home.module';
import { NgxPopoverCardComponent } from '../calendar/popover-calendar.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  NgxPopoverCardComponent
];

const ENTRY_COMPONENTS = [
  NgxPopoverCardComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ]
})
export class PagesModule {
}
