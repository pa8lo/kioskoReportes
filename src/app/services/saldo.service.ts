import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global'

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor() { }

  async GetAll():Promise<any>{
    return await axios.get( url+'Cajas',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetLast():Promise<any>{
    return await axios.get( url+'Cajas/last',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
