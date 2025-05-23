import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumnos } from './alumnos.component';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }



  getAlumns$(): Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(this.baseUrl)
  }

  updateAlumno(id: number, alumno: Alumnos): Observable<Alumnos> {
    return this.http.put<Alumnos>(`${this.baseUrl}/${id}`, alumno);
  }
/*   getAlumns$(): Observable<Alumnos[]>{

     const alumnsObservable = new Observable<Alumnos[]>((observer) => {
      setTimeout(() => {
        observer.next(MY_ALUMNOS_DB)
        observer.complete()
      }, 2000);
    })
    return alumnsObservable;
  } */

  getAlumnByPosition(position: number): Observable<Alumnos> {
    return this.http.get<Alumnos>(`${this.baseUrl}/${position}`);
  }

  createAlumno(alumno: Alumnos): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.baseUrl, alumno);
  }
}