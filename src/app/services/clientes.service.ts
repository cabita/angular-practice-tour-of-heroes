import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes$ = new Subject<Cliente[]>();
  /* isDesktop$ = this.break

  constructor( private breakpointObserver: BreakpointObserver ) { } */
}
