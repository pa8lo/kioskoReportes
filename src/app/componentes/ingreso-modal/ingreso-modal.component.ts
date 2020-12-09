import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso-modal',
  templateUrl: './ingreso-modal.component.html',
  styleUrls: ['./ingreso-modal.component.scss']
})
export class IngresoModalComponent implements OnInit {
  public monto;
  public descripcion;
  constructor(public ingresoService: IngresoService) { }

  ngOnInit(): void {
  }

  crearIngreso(){
    console.log()
    let data = {
      Date: moment().format('YYYY-M-DD 00:00:00.000'),
      descripcion:this.descripcion,
      precio:this.monto ,
      active:true,
      User : 1,
    }
    console.log(data)
    this.ingresoService.Create(data).then(x => {
      console.log(x)
    })
  }
}
