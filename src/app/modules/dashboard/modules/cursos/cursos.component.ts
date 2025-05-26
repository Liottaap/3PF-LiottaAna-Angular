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
ultimoCursoEditado: Curso | null = null;
onCursoEditado(cursoActualizado: Curso) {
  this.ultimoCursoEditado = cursoActualizado;

  // Aquí puedes actualizar el arreglo de cursos para reflejar el cambio
  const index = this.cursos.findIndex(c => c.id === cursoActualizado.id);
  if (index !== -1) {
    this.cursos[index] = cursoActualizado;
  }
}

onCursoEliminado(id: number) {
  const index = this.cursos.findIndex(c => c.id === id);
  if (index !== -1) {
    this.cursos.splice(index, 1);
  }
}


}
