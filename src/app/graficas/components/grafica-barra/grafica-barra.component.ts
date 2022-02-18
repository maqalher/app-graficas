import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  // };
  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };


  // public barChartType: ChartType = 'bar';
  @Input() barChartType:ChartType = 'bar';


  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#076CEB', hoverBackgroundColor: '#0736EB' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F52607', hoverBackgroundColor: '#F56407' }
  //   ]
  // };
  @Input() barChartData: ChartData = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 82, 28, 1, 39, 46, 67, 50 ], label: 'Series C' }

    ]
  };

  constructor() { }

  ngOnInit(): void {
    // console.log(this.horizontal);
    // if( this.horizontal ) {
    //    this.barChartType = 'horizontalBar';
    // }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

      this.chart?.update();
  }

}
