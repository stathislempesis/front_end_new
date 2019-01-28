import { Component,EventEmitter, Output } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-popover-card',
  template: `
    <div class="nebular-calendar col-md-12 col-lg-6 col-xxxl-4">
          <nb-calendar-range [(range)]="range" (rangeChange)="getRangeDate($event)"></nb-calendar-range>
        </div>
  `,
})

export class NgxPopoverCardComponent {

  range: NbCalendarRange<Date>;

  @Output() selectedDateRange = new EventEmitter();

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  getRangeDate(event) {

    if (event.start && event.end) {
      this.selectedDateRange.emit(this.range);
    }

  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}
