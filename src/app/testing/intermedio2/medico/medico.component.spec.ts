import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component"
import { MedicoService } from "./medico.service";

describe('Medico Componenttttttt', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe crearse el componente', () => {
        expect( component ).toBeTruthy();
    });

    it('Debe retornar el nombre del médico', () => {

        const nombre = 'Alberto';
        const mensaje = component.saludarMedico(nombre);

        expect( mensaje ).toContain( nombre );
    });


});