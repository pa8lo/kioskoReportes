import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

    data: any
    gastosxTipo:Array<any>;
    labels:Array<any> = [];
    valors:Array<any> = [];
    background:Array<any>= []
    constructor(public gastoService:GastoService) {
      this.data = {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
              {
                  label: 'Proveedores',
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)',
                  data: [65, 59, 90, 81, 56, 55, 40]
              }
          ]
      };
  }

  ngOnInit(): void {
    this.gastoService.GetGastosByProveedores().then(x => {
        this.gastosxTipo = x
        this.gastosxTipo.forEach(gasto => {
          this.labels.push(gasto.descripcion)
          this.valors.push(gasto.cantidad * -1);
        });

        this.data = {
            labels: this.labels,
            datasets: [
                {
                    label: 'Proveedores',
                    backgroundColor: '#3c71b3',
                    borderColor: 'black',
                    pointBackgroundColor: '#3c71b3',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#d4e6fd',
                    pointHoverBorderColor: '#1eaf21',
                    data: this.valors
                }
            ]
        };

    })
  }

}
