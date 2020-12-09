import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso-label',
  templateUrl: './ingreso-label.component.html',
  styleUrls: ['./ingreso-label.component.scss']
})
export class IngresoLabelComponent implements OnInit {

  total :number
  ingresoModal:boolean = false
  constructor(public ingresoService:IngresoService) { }

  ngOnInit(): void {
    this.ingresoService.GetTotal().then(x => {
      this.total = x
    })
  }
  viewModal(){
    this.ingresoModal = true
  }

}
