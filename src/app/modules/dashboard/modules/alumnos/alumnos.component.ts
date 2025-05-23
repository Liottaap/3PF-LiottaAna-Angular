import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumnosService } from './alumnos.service';
import { AuthService } from '../../../../core/services/auth.services';
import { User } from '../../../../core/models';
import { Observable } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';
import { Curso } from '../cursos/cursos.component';
import { AlumnosList } from './components/alumnos-table/alumnos-table.component';


export interface Alumnos {
  position: number;
  nombre: string;
  apellido: string;
  estado: string;
  cursos: []
}

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  cursosDisponibles: Curso[] = [];
  isEditingId: number | null = null;
  alumnForm: FormGroup;
  isLoading = false
  alumnos: Alumnos[] = [];


  authUser$: Observable<User | null>

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private authService :AuthService,
    private cursosService: CursosService
  ) {
    this.authUser$ = this.authService.authUser$
    
    this.alumnForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      curso: [''],
      email: [''],
      telefono: ['']
    });
  }

  ngOnInit(): void {
    this.fetchAlumnos()
    this.fetchCursos()
  }
  fetchAlumnos() {
    this.isLoading = true;
    this.alumnosService.getAlumns$().subscribe({
      next: (data) => {
        this.alumnos = data;
      },
      error: (err) => console.error('Error al cargar alumnos:', err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  fetchCursos() {
    this.cursosService.getCursos().subscribe({
      next: (data) => {
        this.cursosDisponibles = data;
      },
      error: (err) => console.error('Error al cargar cursos:', err)
    });
  }

  onSubmit() {
    const formData = this.alumnForm.value;

    if (this.isEditingId) {
      // Editar alumno existente
      this.alumnosService.updateAlumno(this.isEditingId, {
        ...formData,
        id: this.isEditingId,
        cursos: []
      }).subscribe(() => {
        this.fetchAlumnos();
        this.alumnForm.reset();
        this.isEditingId = null;
      });
    } else {
      // Crear nuevo alumno
      this.alumnosService.createAlumno({
        ...formData,
        cursos: []
      } as Alumnos).subscribe(() => {
        this.fetchAlumnos();
        this.alumnForm.reset();
      });
    }
  }

  onDeleteAlumn(position: number) {
    if (confirm('¿Estas seguro que quieres eliminar el Alumno?')) {
      this.alumnos = this.alumnos.filter((alumno) => alumno.position != position);
    }
  }

  onEditAlumn(alumno: AlumnosList) {
    this.isEditingId = alumno.position;
    this.alumnForm.patchValue(alumno);
  }
}