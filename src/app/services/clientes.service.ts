import { Injectable } from '@angular/core';

import { Cliente, Grupo } from '../interfaces/cliente.interface';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

 private clientes$: Subject<Cliente[]> = new Subject<Cliente[]>();
  
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor(  ) { 
    this.clientes = [];
  }

  getClientes$(): Observable<Cliente[]> {
    return this.clientes$.asObservable();
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes);
  }
}
