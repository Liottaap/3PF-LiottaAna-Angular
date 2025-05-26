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
  // 'Debe crearse App', devuelve un callback donde se ejecuta la prueba en sí.
  //Dentro de fixture hay varias funciones (detectar cambios, destruir componentes)
  it('should create the app', () => {
    //creamos el componente
    const fixture = TestBed.createComponent(AppComponent);
    //extraemos la instancia
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // "it" es un test individual
  it(`should have as title 'Proyecto Final'`, () => {
    //creamos el componente
    const fixture = TestBed.createComponent(AppComponent);
    //Extraemos la instancia
    const app = fixture.componentInstance;
    //"Espero que el titulo sea igual a 'Proyecto final'"
    expect(app.title).toEqual('Proyecto Final');
  });
  // "it" es un test individual
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Proyecto Final')
  });
});
