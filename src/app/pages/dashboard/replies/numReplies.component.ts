import {formatDate} from '@angular/common';
import { RepliesService } from "./replies.service";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { NgxPopoverCardComponent } from '../../../calendar/popover-calendar.component';

@Component({
  selector: 'ngx-dashboard-numReplies',
  template: `
    <ng-template #popContent>
         <ngx-popover-card (selectedDateRange)="updateChart($event)"></ngx-popover-card>
    </ng-template>
    <button class="btn btn-warning with-margins" [nbPopover]="popContent">Calendar</button>
    <chart type="line" [data]="dataForChart" [options]="chartOptions"></chart>
  `,
})
export class NumRepliesComponent implements OnInit,OnDestroy {

    chartOptions: any;
    themeSubscription: any;
    dataForChart: any;

    public chartDataReplies : { label: string, data: Array<any>, backgroundColor: string, borderColor: string }[] = [];

    public chartLabelsReplies :Array<any> = [];

    constructor(private theme: NbThemeService, private repliesService: RepliesService) {}

  ngOnInit() {
    this.createChart(null,null);
  }

  createChart(dateRangeStart: any, dateRangeEnd: any){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.repliesService.findRepliesById(1034105453989572608).subscribe(
        data => {

          let arr: any[];
          arr = [];
          for (let stat of data) {
               let newDate = new Date(stat[0])
               if(dateRangeStart==null && dateRangeEnd==null){
                   arr.push(stat[1]);
                   this.chartLabelsReplies.push(newDate);
               }else{
                    if(newDate>=dateRangeStart && newDate<=dateRangeEnd){
                       arr.push(stat[1]);
                       this.chartLabelsReplies.push(newDate); 
                    }
               }
         }

         this.chartDataReplies.push({
                      label: "Number of replies",
                      data: arr,
                      backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
                      borderColor: colors.primary
                  });

         this.dataForChart = {
            labels: this.chartLabelsReplies,
            datasets: this.chartDataReplies 
         };
        },
        err => {
          console.log(err);
        }

      );

      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'time',
                time: {
                    unit: 'day'
                },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  updateChart(dateRange){
   this.chartDataReplies.length = 0;
   this.chartLabelsReplies.length=0;
   this.createChart(dateRange.start,dateRange.end);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
