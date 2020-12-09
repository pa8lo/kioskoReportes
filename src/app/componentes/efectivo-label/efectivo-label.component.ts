import { Component, OnInit } from '@angular/core';
import { EfectivoService } from 'src/app/services/efectivo.service';

@Component({
  selector: 'app-efectivo-label',
  templateUrl: './efectivo-label.component.html',
  styleUrls: ['./efectivo-label.component.scss']
})
export class EfectivoLabelComponent implements OnInit {
  total:number
  constructor(public efectivoService :EfectivoService) { }

  ngOnInit(): void {
    this.efectivoService.GetTotal().then(x => {
      this.total = x
    })
  }

}
