import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global'

@Injectable({
  providedIn: 'root'
})
export class SueldoService {

  constructor() {
   }
  
   async GetAll():Promise<any>{
    return await axios.get( url+'Saldo',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
