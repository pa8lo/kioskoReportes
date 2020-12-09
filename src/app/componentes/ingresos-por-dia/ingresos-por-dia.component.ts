import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingresos-por-dia',
  templateUrl: './ingresos-por-dia.component.html',
  styleUrls: ['./ingresos-por-dia.component.scss']
})
export class IngresosPorDiaComponent implements OnInit {

  data:any;
  public ingresosPorDia:Array<any>
  public labels:Array<any> = []
  public valors:Array<any> = []
  constructor(public ingresoService: IngresoService) {

}

  ngOnInit(): void {
    this.ingresoService.GetIngresoPorDia().then(x => {
      this.ingresosPorDia = x
      this.ingresosPorDia.forEach(ingreso => {
        this.labels.push(ingreso.day)
        this.valors.push(ingreso.promedio);
      });
      this.data = {
        labels: this.labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: this.valors
            }
        ]
    }
    })
  }

}
