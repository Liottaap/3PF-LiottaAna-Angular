import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

//describe agrupa los test del componente
describe('AppComponent', () => {

//se ejecuta antes de la prueba, define un modulo de pruebas
  beforeEach(async () => {
    //Aqui configuramos el entorno de pruebas
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // "it" es un test individual
  it('Debe crearse app', () => {
    //creamos el componente
    const fixture = TestBed.createComponent(AppComponent);
    //extraemos la instancia
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Debe contener el titulo 'Proyecto Final'`, () => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    //"Espero que el titulo sea igual a 'Proyecto final'"
    expect(app.title).toEqual('Proyecto Final');
  });

});
