import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MedicosComponent } from './testing/intermedio/espias/medicos.component';
import { MedicoComponent } from './testing/intermedio2/medico/medico.component';
import { HospitalComponent } from './testing/intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './testing/intermedio2/incrementador/incrementador.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserTestingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientTestingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
