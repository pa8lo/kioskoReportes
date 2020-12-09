import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global'

@Injectable({
  providedIn: 'root'
})
export class EfectivoService {

  constructor() { }

  async GetAll():Promise<any>{
    return await axios.get( url+'Retiros',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetTotal():Promise<any>{
    return await axios.get( url+'Totales/Retiros',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
