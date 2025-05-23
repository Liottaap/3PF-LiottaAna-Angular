import { Component } from '@angular/core';
import { Curso } from '../cursos/cursos.component';
import { CursosService } from '../cursos/cursos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumnosService } from '../alumnos/alumnos.service';

@Component({
  selector: 'app-inscripcion',
  standalone: false,
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent{
  cursos: Curso[] = [];
  form: FormGroup

  constructor(private cursosService: CursosService,  private alumnosService: AlumnosService
  ){
    this.form = new FormGroup({
      nombre: new FormControl('', ),
      apellido: new FormControl('', ),
      dni: new FormControl('', ),
      email: new FormControl('', ),
      curso: new FormControl('', )
    });
  }

  ngOnInit(): void{
    this.cursosService.getCursos().subscribe((data) => {
      this.cursos = data
    })
  }
  onSubmit() {
    if (this.form.valid) {
      const nuevoAlumno = this.form.value;
  
      this.alumnosService.createAlumno(nuevoAlumno).subscribe(() => {
        alert('Alumno guardado con éxito 🎉');
        this.form.reset();
      });
    } else {
      alert('Por favor completá todos los campos.');
    }
  }
}
