import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../alumnos.service';
import { Observable } from 'rxjs';
import { Alumnos } from '../../alumnos.component';

@Component({
  selector: 'app-detalle-alumno',
  standalone: false,
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.scss'] // <== corregido
})
export class DetalleAlumnoComponent {
  Alumn$: Observable<Alumnos | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    const alumnPosition: string = this.activatedRoute.snapshot.params['id'];
    console.log('Tipo de alumnPosition:', typeof alumnPosition);

    this.Alumn$ = this.alumnosService.getAlumnByPosition(alumnPosition);
    console.log('Posición del alumno:', alumnPosition);
  }
}