import {formatDate} from '@angular/common';
import { RetweetsService } from "./retweets.service";
import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';;

@Component({
  selector: 'ngx-dashboard-numRetweets',
  template: `
    <chart type="line" [data]="dataForChart" [options]="chartOptions"></chart>
  `,
})
export class NumRetweetsComponent implements OnDestroy {

    chartOptions: any;
    themeSubscription: any;

    public dataForChart: any;

    public chartDataRetweets : { label: string, data: Array<any>, backgroundColor: string, borderColor: string }[] = [];

    public chartLabelsRetweets :Array<any> = [];

    constructor(private theme: NbThemeService, private retweetsService: RetweetsService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.retweetsService.findRetweetsById(1034105453989572608).subscribe(
        data => {

          let arr: any[];
          arr = [];
          for (let stat of data) {
               arr.push(stat[1]);
               this.chartLabelsRetweets.push(formatDate(new Date(stat[0]), 'longDate', 'en'));
         }

         this.chartDataRetweets.push({
                      label: "Number of retweets",
                      data: arr,
                      backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
                      borderColor: colors.primary
                  });

         this.dataForChart = {
            labels: this.chartLabelsRetweets,
            datasets: this.chartDataRetweets 
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

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
