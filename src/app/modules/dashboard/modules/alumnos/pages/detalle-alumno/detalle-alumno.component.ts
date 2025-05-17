import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-alumno',
  standalone: false,
  templateUrl: './detalle-alumno.component.html',
  styleUrl: './detalle-alumno.component.scss'
})
export class DetalleAlumnoComponent {


  constructor(private activatedRoute: ActivatedRoute, private alumnosService: AlumnosService){
    console.log(this.activatedRoute);


    const alumnoPosition = this.activatedRoute.snapshot.params['position']
    console.log('Product ID: ', alumnoPosition);
    
  }
}
