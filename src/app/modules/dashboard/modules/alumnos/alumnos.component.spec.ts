import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponent } from './alumnos.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AlumnosService } from './alumnos.service';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosComponent],
      imports: [HttpClientTestingModule,],
      providers: [provideHttpClientTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Debe borrar alumno si se confirma', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    AlumnosService.deleteAlumno.and.returnValue(of({}));
  
    component.onDeleteAlumn(2);
  
    expect(AlumnosService.deleteAlumno).toHaveBeenCalledWith(2);
  });
  
  it('No debe borrar alumno si no se confirma', () => {
    spyOn(window, 'confirm').and.returnValue(false);
  
    component.onDeleteAlumn(2);
  
    expect(AlumnosService.deleteAlumno).not.toHaveBeenCalled();
  });
});


