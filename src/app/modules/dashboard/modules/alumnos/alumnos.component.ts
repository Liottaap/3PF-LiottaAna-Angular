import { Component, OnInit } from "@angular/core";
import { AlumnosService } from "./alumnos.service";
import { FormBuilder, FormGroup } from "@angular/forms";

export interface Alumnos {
  id: string;
  nombre: string;
  apellido: string;
  estado: string;
  curso: string;
}

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumnos[] = [];
  isLoading = false;
  isEditingId: string | null = null;

  alumnForm: FormGroup;

  constructor(
    private alumnosService: AlumnosService,
    private fb: FormBuilder
  ) {
    this.alumnForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      estado: [''],
      curso: [''],
      id: ['']
    });
  }

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos() {
    this.isLoading = true;
    this.alumnosService.getAlumns$().subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => console.error('Error al cargar alumnos:', err),
      complete: () => this.isLoading = false
    });
  }

  onSubmit() {
    const formData = this.alumnForm.value;

    if (this.isEditingId) {
      // Modo edición
      const updatedAlumno: Alumnos = { id: this.isEditingId, ...formData };
      this.alumnosService.updateAlumno(this.isEditingId, updatedAlumno).subscribe(() => {
        this.loadAlumnos();
        this.alumnForm.reset();
        this.isEditingId = null;
      });
    } else {
      // Modo creación
      const {id, ...newAlumnoData} = formData;
      this.alumnosService.createAlumno(newAlumnoData).subscribe(() => {
        this.loadAlumnos();
        this.alumnForm.reset();
      });
    }
  }

  onEditAlumn(alumno: Alumnos) {
    this.isEditingId = alumno.id;
    this.alumnForm.patchValue(alumno);
  }

  onDeleteAlumn(id: string) {
    if (!id) {
      alert('Este alumno no tiene un ID válido y no puede eliminarse.');
      return;
    }
  
    if (confirm('¿Seguro que deseas eliminar este alumno?')) {
      this.alumnosService.deleteAlumno(id).subscribe(() => {
        this.loadAlumnos();
      });
    }
  }
}