import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global'

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor() { }

  async GetAll():Promise<any>{
    return await axios.get( url+'Ingresos',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetTotal():Promise<any>{
    return await axios.get( url+'Totales/Ingresos',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetIngresoPorDia():Promise<any>{
    return await axios.get( url+'Ingresos/Dias',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetIngrsosByMonths():Promise<any>{
    return await axios.get(url+'Ingresos/Meses',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async Create(data):Promise<any>{
    return await axios.post( url+'Ingresos',
      data).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
