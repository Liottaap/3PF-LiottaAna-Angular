import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../../core/services/auth.services';
import { of } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jasmine.createSpy('login').and.returnValue(of(true))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('El email y la contrase;a deben ser campos requeridos', () =>{
    component.loginForm.setValue({
      email: '',
      password: '', 
    })
    expect(component.loginForm.valid).toBeFalse();
  })

  it('Si es formulario es inválido, no se debe hacer login y debe mostrar un alert', () =>{
    component.loginForm.setValue({
      email: '',
      password: '', 
    })

    const alertSpy = spyOn(window,'alert')
    component.login(),
    expect(alertSpy).toHaveBeenCalledOnceWith('Por favor, rellene el formulario')
  })


});