import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';

const components = [
  HomeComponent
];

@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [...components]
})
export class HomeModule { }
