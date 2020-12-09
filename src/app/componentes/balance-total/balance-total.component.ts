import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-balance-total',
  templateUrl: './balance-total.component.html',
  styleUrls: ['./balance-total.component.scss']
})

export class BalanceTotalComponent implements OnInit {
  
  data:any;
  gastosxTipo:any;
  ingresosMensuales:any;
  
  constructor(public gastoService: GastoService, public ingresoService: IngresoService) {
    this.data = {
        labels: ['Historico'],
        datasets: [
            {
                label: 'Ingresos',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65]
            },
            {
                label: 'Gastos',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28]
            }
        ]
    }
  }
  ngOnInit(): void {
    this.gastoService.GetTotal().then(x => {
      this.ingresoService.GetTotal().then(y => {
        this.ingresosMensuales = y
        console.log(this.ingresosMensuales)
        this.gastosxTipo = x * -1
          this.data = {
            labels: ['Historico'],
            datasets: [
                {
                    label: 'Ingresos',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [this.ingresosMensuales] 
                },
                {
                    label: 'Gastos',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [this.gastosxTipo]
                }
            ]
        }

      })
      })

  }

}
