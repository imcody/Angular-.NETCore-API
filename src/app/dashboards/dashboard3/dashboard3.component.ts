import { Component, AfterViewInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements AfterViewInit {
  subtitle: string;

  // lineChart
  public lineChartData1: Array<any> = [
    { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
    { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
  ];

  public lineChartLabels1: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions1: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } }
  };
  public lineChartColors1: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.1)',
      borderColor: 'rgba(6,215,156,1)',
      pointBackgroundColor: 'rgba(6,215,156,1)',
      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6,215,156,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.1)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ];
  public lineChartLegend1 = false;
  public lineChartType1 = 'line';

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 5
  };

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType = 'bar';
  public barChartLegend = false;

  // tslint:disable-next-line:max-line-length
  public barChartData: any[] = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' }, { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }];
  public barChartColors: Array<any> = [{ backgroundColor: '#06d79c' }, { backgroundColor: '#398bf7' }];

  ngAfterViewInit() {}
}
