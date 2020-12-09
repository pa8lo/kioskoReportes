import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-balance-mensual',
  templateUrl: './balance-mensual.component.html',
  styleUrls: ['./balance-mensual.component.scss']
})
export class BalanceMensualComponent implements OnInit {

  data:any;
  gastosxTipo:Array<any>;
  ingresosMensuales:Array<any>;
  labels:Array<any> = [];
  valorsGastos:Array<any> = [];
  valorsIngresos:Array<any> = [];
  background:Array<any>= []
  constructor(public gastoService: GastoService, public ingresoService: IngresoService) {

  }
  ngOnInit(): void {

    this.gastoService.GetGastosByMonths().then(x => {
      this.ingresoService.GetIngrsosByMonths().then(y => {
        this.ingresosMensuales = y
        this.gastosxTipo = x
        this.gastosxTipo.forEach(gasto => {
          this.labels.push(gasto.mes)
          this.valorsGastos.push(gasto.cantidad);
        });
        this.ingresosMensuales.forEach(ingreso => {
          this.valorsIngresos.push(ingreso.cantidad)
        })
          this.data = {
            labels: this.labels,
            datasets: [
                {
                    label: 'Ingresos',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: this.valorsIngresos
                },
                {
                    label: 'Gastos',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: this.valorsGastos
                }
            ]
        }

      })
      })


  }

}
