import {formatDate} from '@angular/common';
import { HomeService } from "../home.service";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-dashboard-retweetsStatsPie',
  template: `
    <ng-template #popContent>
         <ngx-popover-card (selectedDateRange)="updateChart($event)"></ngx-popover-card>
    </ng-template>
    <button class="btn btn-warning with-margins" [nbPopover]="popContent">Calendar</button>
    <chart type="pie" [data]="dataForChart" [options]="chartOptions"></chart>
  `,
})
export class ReTweetsStatsPieComponent implements OnInit,OnDestroy {

    chartOptions: any;
    themeSubscription: any;
    dataForChart: any;

    public chartDataRetweets : {data: Array<any>, backgroundColor: any[]}[] = [];

    constructor(private theme: NbThemeService, private homeService: HomeService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.createChart('2018-12-24','2018-12-29');
  }

  createChart(dateRangeStart: string, dateRangeEnd: string){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.homeService.findTweetsRetweetsById2(1034105453989572608,dateRangeStart,dateRangeEnd).subscribe(
        data => {

          let arr: any[];
          arr = [];
          for (let stat of data) {
               arr.push(stat[0]);
               arr.push(stat[1]);
         }

         this.chartDataRetweets.push({
                      data: arr,
                      backgroundColor: [colors.primaryLight, colors.infoLight]
                  });

          this.dataForChart = {
            labels: ['Number of tweets', 'Number of retweeted tweets'],
            datasets: this.chartDataRetweets 
         };

        },
        err => {
          console.log(err);
        }

      );

      this.chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
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
   this.chartDataRetweets.length = 0;
   this.createChart(this.datePipe.transform(dateRange.start, 'yyyy-MM-dd'),this.datePipe.transform(dateRange.end, 'yyyy-MM-dd'));
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
