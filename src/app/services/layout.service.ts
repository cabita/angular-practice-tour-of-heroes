import { Injectable } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  isDesktop$ = this.breakpointService.observe(`(min-width:992px)`).pipe(
    map(state => state.matches)
  );
  
  isMobile = this.breakpointService.isMatched('(max-width: 576px)');


  constructor(private breakpointService: BreakpointObserver) { }
}
