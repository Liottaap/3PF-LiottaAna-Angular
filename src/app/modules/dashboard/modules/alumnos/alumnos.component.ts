import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumnosList } from './components/alumnos-table/alumnos-table.component';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'] // ¡Ojo! debe ser styleUrls (plural)
})
export class AlumnosComponent {

  isEditingId: number | null = null;
  alumnForm: FormGroup;

  alumnos: AlumnosList[] = [
    {position: 1, nombre: 'Rosario', apellido: "Pérez" , estado: 'Aprobado'},
    {position: 2, nombre: 'Joaquin', apellido: "Rivadavia", estado: 'Desaprobado'},
    {position: 3, nombre: 'Pedro', apellido: "Maradona", estado: 'Desaprobado'},
    {position: 4, nombre: 'Mateo', apellido:"Ahumada" , estado: 'Desaprobado'},
    {position: 5, nombre: 'Milagros', apellido: "Gil", estado: 'Aprobado'},
    {position: 6, nombre: 'Francisco', apellido: "Sabatini", estado: 'Aprobado'},
    {position: 7, nombre: 'Justo', apellido: "Rossomando", estado: 'Aprobado'},
    {position: 8, nombre: 'Ana', apellido: "Liotta", estado: 'Aprobado'},

  ];

  constructor(private fb: FormBuilder) {
    // Corregimos el uso de this.fb.group
    this.alumnForm = this.fb.group({
      nombre: [''],
      apellido: [''],
    });
  }

  // Esta función debe estar fuera del constructor
  onSubmit() {
    if(this.isEditingId) {
      this.alumnos = this.alumnos.map((al) => al.position === this.isEditingId ? {...al, ...this.alumnForm.value} : al)
    }else{
      const newAlumn =this.alumnForm.value
      newAlumn.position = this.alumnos.length + 1

      this.alumnos = [...this.alumnos, this.alumnForm.value]
      console.log(this.alumnos);
    }
    this.alumnForm.reset();
    this.isEditingId = null;
  }

  onDeleteAlumn(position:number){
    console.log('Se va a eliminar el producto con position:', position);
    if(confirm('Estas seguro que quieres eliminar el Alumno?'))
    this.alumnos = this.alumnos.filter((alumno) => alumno.position != position )
  }

  onEditAlumn(alumno: AlumnosList){
    this.isEditingId = alumno.position
    console.log('Se va a editar datos del alumno:', alumno )
    this.alumnForm.patchValue(alumno)
  }
}