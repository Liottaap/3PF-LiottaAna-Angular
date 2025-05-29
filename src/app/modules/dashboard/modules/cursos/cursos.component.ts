import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin, map } from 'rxjs';
import { cursosActions } from './store/cursos.actions';
import { Curso } from './models/curso.model';
import { selectCursosList, selectCursosLoading, selectCursosError } from './store/cursos.selector';
import { Alumnos, AlumnosService } from '../alumnos/alumnos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cursos',
  standalone: true, // <-- importante
  imports: [CommonModule], // 👈 FALTA ACA
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  alumnosPorCurso: { [nombreCurso: string]: Alumnos[] } = {};

  constructor(private store: Store, private alumnosService: AlumnosService) {
    this.cursos$ = this.store.select(selectCursosList);
    this.loading$ = this.store.select(selectCursosLoading);
    this.error$ = this.store.select(selectCursosError);
  }

  ngOnInit(): void {
    this.store.dispatch(cursosActions.loadCourses());

    // Cargar todos los alumnos y organizarlos por curso
    this.alumnosService.getAlumns$().subscribe((alumnos) => {
      this.cursos$.subscribe((cursos) => {
        cursos.forEach((curso) => {
          this.alumnosPorCurso[curso.nombre] = alumnos.filter(a => a.curso === curso.nombre);
        });
      });
    });
  }

  desuscribirAlumno(id: string, cursoNombre: string) {
    this.alumnosService.deleteAlumno(id).subscribe(() => {
      this.alumnosPorCurso[cursoNombre] = this.alumnosPorCurso[cursoNombre].filter(a => a.id !== id);
    });
  }
}
