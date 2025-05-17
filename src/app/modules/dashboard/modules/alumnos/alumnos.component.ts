import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumnosService } from './alumnos.service';


export interface Alumnos {
  position: number;
  nombre: string;
  apellido: string;
  estado: string;
}

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  isEditingId: number | null = null;
  alumnForm: FormGroup;
  isLoading = false
  alumnos: Alumnos[] = [];

  constructor(private fb: FormBuilder,private alumnosService: AlumnosService) {
    this.loadAlumnsObservable()

    
    this.alumnForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      estado: ['']
    });
  }
  loadAlumnsObservable () {
    this.isLoading = true;
    this.alumnosService
      .getAlumns$()
      .subscribe({
        next: (datos) =>{console.log(datos);},
        error: (error) => console.log(error),
        complete: () => {this.isLoading = false}
        
      })
  }

  loadAlumns() {
    this.isLoading = true;
    this.alumnosService
      .getAlumns()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => 
        console.error(error)
      )
      .finally(() => {
        this.isLoading = false;
      });

  }

  ngOnInit(): void {
    this.alumnosService.getAlumns$().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  onSubmit() {
    if (this.isEditingId) {
      this.alumnos = this.alumnos.map((al) =>
        al.position === this.isEditingId ? { ...al, ...this.alumnForm.value } : al
      );
    } else {
      const newAlumn = {
        ...this.alumnForm.value,
        position: this.alumnos.length + 1
      };
      this.alumnos = [...this.alumnos, newAlumn];
    }
    this.alumnForm.reset();
    this.isEditingId = null;
  }

  onDeleteAlumn(position: number) {
    if (confirm('¿Estas seguro que quieres eliminar el Alumno?')) {
      this.alumnos = this.alumnos.filter((alumno) => alumno.position != position);
    }
  }

  onEditAlumn(alumno: Alumnos) {
    this.isEditingId = alumno.position;
    this.alumnForm.patchValue(alumno);
  }
}