import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HeroService } from '../services/hero.service';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [ 
        HttpClientModule,
        RouterModule
      ]
    })
    
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});