import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosComponent } from './alumnos.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

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
});
