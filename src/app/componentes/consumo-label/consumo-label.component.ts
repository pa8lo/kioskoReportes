import { Component, OnInit } from '@angular/core';
import { ConsumoService } from 'src/app/services/consumo.service';

@Component({
  selector: 'app-consumo-label',
  templateUrl: './consumo-label.component.html',
  styleUrls: ['./consumo-label.component.scss']
})
export class ConsumoLabelComponent implements OnInit {

  total:number
  constructor(public consumoService : ConsumoService) { }

  ngOnInit(): void {
    this.consumoService.GetTotal().then(x => {
      this.total = x
    })
  }

}
