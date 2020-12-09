import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global';

@Injectable({
  providedIn: 'root'
})
export class TipoGastoService {

  constructor() { }

  async GetAll():Promise<any>{
    return await axios.get( url+'TiposGasto',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
