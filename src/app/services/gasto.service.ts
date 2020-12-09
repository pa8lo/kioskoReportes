import { Injectable } from '@angular/core';
import axios from 'axios';
import { url } from './global'

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  async GetAll():Promise<any>{
    return await axios.get( url+'Gastos',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetTotal():Promise<any>{
    return await axios.get( url+'Totales/Gastos',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetGastosByType():Promise<any>{
    return await axios.get(url+'Gastos/tiposGastos',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetGastosByProveedores():Promise<any>{
    return await axios.get(url+'Gastos/Proveedores',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async GetGastosByMonths():Promise<any>{
    return await axios.get(url+'Gastos/Meses',{
    }).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
  async Create(data):Promise<any>{
    return await axios.post( url+'Gastos',
      data).then( (x) => {
      return x.data
    }).catch( (x => {
      return x
    }))
  }
}
