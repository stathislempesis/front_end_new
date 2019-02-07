import {formatDate} from '@angular/common';
import { HomeService } from "../home.service";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard-tweetsStatsBars',
  template: `
    <ng-template #popContent>
         <ngx-popover-card (selectedDateRange)="updateChart($event)"></ngx-popover-card>
    </ng-template>
    <button class="btn btn-warning with-margins" [nbPopover]="popContent">Calendar</button>
    <chart type="bar" [data]="dataForChart" [options]="chartOptions"></chart>
  `,
})
export class TweetsStatsBarsComponent implements OnInit,OnDestroy {

    chartOptions: any;
    themeSubscription: any;
    dataForChart: any;

    public chartDataReplies : { label: string, data: Array<any>, backgroundColor: string, borderColor: string }[] = [];

    public chartLabelsReplies :Array<any> = [];

    constructor(private theme: NbThemeService, private homeService: HomeService) {}

  ngOnInit() {
    this.createChart(null,null);
  }

  createChart(dateRangeStart: any, dateRangeEnd: any){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.homeService.findTweetsById(1034105453989572608).subscribe(
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
                      label: "Number of tweets",
                      data: arr,
                      backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
                      borderColor: colors.primaryLight
                  });

        },
        err => {
          console.log(err);
        }

      );

      this.homeService.findRepliesById(1034105453989572608).subscribe(
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
                      backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                      borderColor: colors.infoLight
                  });

        },
        err => {
          console.log(err);
        }

      );

      this.dataForChart = {
            labels: this.chartLabelsReplies,
            datasets: this.chartDataReplies 
         };

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
   this.chartLabelsReplies.length = 0;
   this.createChart(dateRange.start,dateRange.end);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
