import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPopoverCardComponent } from './popover-calendar.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
 imports:      [ ThemeModule,CommonModule ],
 declarations: [ NgxPopoverCardComponent ],
 exports:      [ NgxPopoverCardComponent ]
})
export class NgxPopoverCardModule { }
