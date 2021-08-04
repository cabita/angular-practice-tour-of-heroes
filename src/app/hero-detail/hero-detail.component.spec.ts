import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  const locationStub = {
    back: jasmine.createSpy('back')
  }

  beforeEach( () => {

      TestBed.configureTestingModule({
          declarations: [ HeroDetailComponent ],
          imports: [ 
            HttpClientTestingModule,
            FormsModule,
            RouterTestingModule
          ],
          providers: [ HeroService,  {provide: Location, useValue: locationStub} ]
      });

      fixture = TestBed.createComponent( HeroDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*   it( ' Call the method getHero', () => {

    const Hero: Hero = {
      id: 1,
      name: 'test'
    }
    
    const spy = spyOn( serviceHero, 'getHero').and.callFake( (id) => {
      return of(Hero);      
    });
    
    component.getHero();

    expect( spy ).toHaveBeenCalledWith(1);

}); */

  it(' Testing location.back()', () => {
      component.hero = { id: 1, name: 'test'}
      fixture.detectChanges();
       
      const location = fixture.debugElement.injector.get(Location);
      
      const elem = fixture.debugElement.queryAll(By.css('button'))[0];
      elem.triggerEventHandler('click', null);

      component.save();
    
      expect ( location.back).toHaveBeenCalledTimes(1);
    
  });

});