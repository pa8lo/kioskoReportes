import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gasto-label',
  templateUrl: './gasto-label.component.html',
  styleUrls: ['./gasto-label.component.scss']
})
export class GastoLabelComponent implements OnInit {
  public total:number
  constructor(public gastoService : GastoService) { }

  ngOnInit(): void {
    this.gastoService.GetTotal().then(x => {
      this.total = x
    })
  }

}
