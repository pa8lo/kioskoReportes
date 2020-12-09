import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';

import {ChartModule} from 'primeng/chart';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import {CardModule} from 'primeng/card';
import { SaldoLabelComponent } from './componentes/saldo-label/saldo-label.component';
import { GastoLabelComponent } from './componentes/gasto-label/gasto-label.component';
import { IngresoLabelComponent } from './componentes/ingreso-label/ingreso-label.component';
import { ConsumoLabelComponent } from './componentes/consumo-label/consumo-label.component';
import { GastoPorTipoLabelComponent } from './componentes/gasto-por-tipo-label/gasto-por-tipo-label.component';
import { GastoPorDiaComponent } from './componentes/gasto-por-dia/gasto-por-dia.component';
import { IngresosPorDiaComponent } from './componentes/ingresos-por-dia/ingresos-por-dia.component';
import { BalanceMensualComponent } from './componentes/balance-mensual/balance-mensual.component';
import { BalanceTotalComponent } from './componentes/balance-total/balance-total.component';
import { EfectivoLabelComponent } from './componentes/efectivo-label/efectivo-label.component';
import { GastosMensualesComponent } from './componentes/gastos-mensuales/gastos-mensuales.component';
import { IngresoModalComponent } from './componentes/ingreso-modal/ingreso-modal.component';
import { GastoModalComponent } from './componentes/gasto-modal/gasto-modal.component';
import { ConsumoModalComponent } from './componentes/consumo-modal/consumo-modal.component';
import { SueldoModalComponent } from './componentes/sueldo-modal/sueldo-modal.component';
import { RetiroModalComponent } from './componentes/retiro-modal/retiro-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule  } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresosComponent,
    SaldoLabelComponent,
    GastoLabelComponent,
    IngresoLabelComponent,
    ConsumoLabelComponent,
    GastoPorTipoLabelComponent,
    GastoPorDiaComponent,
    IngresosPorDiaComponent,
    BalanceMensualComponent,
    BalanceTotalComponent,
    EfectivoLabelComponent,
    GastosMensualesComponent,
    IngresoModalComponent,
    GastoModalComponent,
    ConsumoModalComponent,
    SueldoModalComponent,
    RetiroModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartModule,
    CardModule,
    InputNumberModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
