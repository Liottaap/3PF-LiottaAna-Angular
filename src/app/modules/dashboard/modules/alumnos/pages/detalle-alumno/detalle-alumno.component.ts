import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alumno',
  standalone: false,
  templateUrl: './detalle-alumno.component.html',
  styleUrl: './detalle-alumno.component.scss'
})
export class DetalleAlumnoComponent {
  constructor(private activatedRoute: ActivatedRoute){
    console.log(this.activatedRoute);
    
  }
}
