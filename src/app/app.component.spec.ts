import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { elementAt } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './services/in-memory-data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        MessagesComponent,
        HeroSearchComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        )
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Tour of Heroes');
  });

  it( 'Debe tener un router-oulet' , () => {
  
    const fixture = TestBed.createComponent(AppComponent);
    /* const debugElement = fixture.nativeElement;

    expect( debugElement.querySelector('router-outlet')).not.toBeNull(); */

    // Another way to test if <router-outlet> exists
    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ));

    expect( debugElement ).not.toBeNull();
    
  
  });

  it( 'Debe tener un link a la página de héroes' , () => {
  
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ));
/*     
    console.log(debugElements) */
  
    let existe = false;

    for ( const elem of debugElements ) {

      if (elem.attributes['routerLink'] === '/heroes' ) {
        existe = true;
        break;
      }
    }

    expect( existe ).toBeTruthy();

  });
  
  


});