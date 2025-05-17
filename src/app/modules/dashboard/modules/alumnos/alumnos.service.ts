import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumnos } from './alumnos.component';

const ALUMNOS_DB: Alumnos[] = [
    {position: 1, nombre: 'Rosario', apellido: "Pérez" , estado: 'Aprobado'},
    {position: 2, nombre: 'Joaquin', apellido: "Rivadavia", estado: 'Desaprobado'},
    {position: 3, nombre: 'Pedro', apellido: "Maradona", estado: 'Desaprobado'},
    {position: 4, nombre: 'Mateo', apellido:"Ahumada" , estado: 'Desaprobado'},
    {position: 5, nombre: 'Milagros', apellido: "Gil", estado: 'Aprobado'},
    {position: 6, nombre: 'Francisco', apellido: "Sabatini", estado: 'Aprobado'},
    {position: 7, nombre: 'Justo', apellido: "Rossomando", estado: 'Aprobado'},
    {position: 8, nombre: 'Ana', apellido: "Liotta", estado: 'Aprobado'},
]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private cursos: Alumnos[] = []
  constructor() { }

  getAlumns(): Promise<Alumnos[]>{
    console.log('Fetching products...')

    const alumnsPromise = new Promise<Alumnos[]>((res,rej)=>{
      setTimeout(() => {
        res(ALUMNOS_DB)
      }, 2000);
    });
    
    return alumnsPromise
  };

  getAlumns$(): Observable<Alumnos[]>{
    const alumnsObservable = new Observable<Alumnos[]>((observer) => {
      setTimeout(() => {
        observer.next(ALUMNOS_DB)
        observer.complete()
      }, 2000);
    })
    return alumnsObservable;
  }
}
