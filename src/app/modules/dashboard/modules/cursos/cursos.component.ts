import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';



export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string
}

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService){}

ngOnInit():void {
  this.cursosService.getCursos().subscribe((data) =>{
    this.cursos = data
  })
}

}
