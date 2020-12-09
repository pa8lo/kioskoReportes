import { Component, OnInit } from '@angular/core';
import { SaldoService } from 'src/app/services/saldo.service';
import { SueldoService } from 'src/app/services/sueldo.service';

@Component({
  selector: 'app-saldo-label',
  templateUrl: './saldo-label.component.html',
  styleUrls: ['./saldo-label.component.scss']
})
export class SaldoLabelComponent implements OnInit {
  public saldo:any;
  constructor(public saldoService:SaldoService) { }

  ngOnInit(): void {
    this.saldoService.GetLast().then(x => {
      this.saldo = x
    })
  }

}
