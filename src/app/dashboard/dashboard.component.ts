import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Hero } from 'src/app/interfaces/hero';

import { HeroService } from '../services/hero.service';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  private sourceSubject = new Subject<string>();
  private sourceBehavior = new BehaviorSubject<string>('Hola INicial');

  isDesktop$ = this.layoutService.isDesktop$;
  isMobile = this.layoutService.isMobile;

  constructor(private heroService: HeroService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.getHeroes();    

     this.sourceBehavior.subscribe(res => console.log(res));
    this.sourceBehavior.next('Behavior');
    /* this.sourceSubject.subscribe(res => console.log(res));
    this.sourceSubject.next('Subject -> Hola'); */

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }


}
