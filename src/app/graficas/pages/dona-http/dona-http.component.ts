import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    // datasets: [ { data: [] }  ]
    datasets: [ ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {

    // Opcion normal
    // this.graficaService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);

    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{
    //         data: Object.values(data)
    //       }]
    //     }
    //   } );

    // rxjs/operators
      this.graficaService.getUusariosRedesSocialesDonaData()
        .subscribe( ({labels, values}) => {

          this.doughnutChartData = {
            labels: labels,
            datasets: [{
              data: values
            }]
          }

        } )

  }

}
