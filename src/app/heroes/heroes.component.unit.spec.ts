import { from } from "rxjs";
import { HeroService } from "../services/hero.service";
import { MessageService } from "../services/message.service";
import { HeroesComponent } from "./heroes.component"


describe('Unit testing for HeroesComponent', () => {

    let component: HeroesComponent;
    const heroService = new HeroService( null, null );

    beforeEach( () => {
        component = new HeroesComponent(heroService, null)
    });

   it( 'It should load the heroessss' , () => {
  
        const heroes = [
          {id: 1, name: 'Hero 1'},
          {id: 2, name: 'Hero 2'}
        ];
    
        spyOn( heroService, 'getHeroes').and.callFake(() => {
          return from([heroes]);
        })
      
        component.ngOnInit();
    
        expect( component.heroes.length ).toBeGreaterThan(0);
        
      });

      it( 'It should return nothing when name is empty' , () => {
      
        const name = '';

        const response = component.add(name);

        expect(response).toBeUndefined();
      
      
      });

      it( 'It should return ' , () => {
      
        
      
      
      });
      
      
      
      

})