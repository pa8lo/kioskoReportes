import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GastoService } from 'src/app/services/gasto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { TipoGastoService } from 'src/app/services/tipo-gasto.service';

@Component({
  selector: 'app-gasto-modal',
  templateUrl: './gasto-modal.component.html',
  styleUrls: ['./gasto-modal.component.scss']
})

export class GastoModalComponent implements OnInit {
  selectedTipo: any;
  selectedProveedor: any;
  descripcion:string;
  monto:any;

  tipo_gasto: any[];
  proveedores: any[];

  groupedCities: any[];


  constructor(public tipoGastoService: TipoGastoService,public proveedorService: ProveedorService,public gastoService: GastoService) {
  }
  
  ngOnInit(): void {
    this.tipoGastoService.GetAll().then(x => {
      this.tipo_gasto = x
    })
    this.proveedorService.GetAll().then(x => {
      this.proveedores = x
    })
  }
  
  crearGasto(){
    console.log()
    let data = {
      Date: moment().format('YYYY-M-DD 00:00:00.000'),
      descripcion:this.descripcion,
      precio:(this.monto  *-1),
      active:true,
      User : 1,
      Tipo_Gasto: this.selectedTipo.id,
      Proveedor:this.selectedProveedor.id
    }
    console.log(data)
    this.gastoService.Create(data).then(x => {
      console.log(x)
    })
  }
}
