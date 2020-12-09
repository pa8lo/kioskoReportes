import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gasto-por-tipo-label',
  templateUrl: './gasto-por-tipo-label.component.html',
  styleUrls: ['./gasto-por-tipo-label.component.scss']
})
export class GastoPorTipoLabelComponent implements OnInit {

  data: any;
  gastosxTipo:Array<any>;
  labels:Array<any> = [];
  valors:Array<any> = [];
  background:Array<any>= []
  constructor(public gastoService:GastoService) {
  }
  ngOnInit(): void {
    this.gastoService.GetGastosByType().then(x => {
        this.gastosxTipo = x
        this.gastosxTipo.forEach(gasto => {
          this.labels.push(gasto.descripcion)
          this.valors.push(gasto.cantidad * -1);
          this.background.push('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
        });
      this.data = {
        labels: this.labels,
        datasets: [
            {
                data: this.valors,
                backgroundColor: this.background,
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
    })
  }

}
