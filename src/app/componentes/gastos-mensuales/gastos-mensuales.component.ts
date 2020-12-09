import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gastos-mensuales',
  templateUrl: './gastos-mensuales.component.html',
  styleUrls: ['./gastos-mensuales.component.scss']
})
export class GastosMensualesComponent implements OnInit {

  data: any
  gastosMensuales:Array<any>;
  labels:Array<any> = [];
  valors:Array<any> = [];
  constructor(public gastoService:GastoService) {

  }
  ngOnInit(): void {
    this.gastoService.GetGastosByMonths().then( x => {
      this.gastosMensuales = x
      this.gastosMensuales.forEach(gasto => {
        this.labels.push(gasto.mes)
        this.valors.push(gasto.cantidad  );
      });
      this.data = {
        labels: this.labels,
        datasets: [
            {
                label: 'Meses',
                data: this.valors,
                fill: false,
                borderColor: '#4bc0c0'
            }
        ]
    }
    })

  }

}
