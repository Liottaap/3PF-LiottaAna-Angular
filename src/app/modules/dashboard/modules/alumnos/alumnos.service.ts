import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alumnos {
  id: string;
  nombre: string;
  apellido: string;
  estado: string;
  curso: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  // Obtener todos los alumnos
  getAlumns$(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(this.baseUrl);
  }

  // Obtener alumno por ID
  getAlumnByPosition(id: string): Observable<Alumnos> {
    return this.http.get<Alumnos>(`${this.baseUrl}/${id}`);
  }

  // Crear alumno
  createAlumno(alumno: Omit<Alumnos, 'id'>): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.baseUrl, alumno);
  }

  // Actualizar alumno
  updateAlumno(id: string, alumno: Alumnos): Observable<Alumnos> {
    return this.http.put<Alumnos>(`${this.baseUrl}/${id}`, alumno);
  }

  // Eliminar alumno
  deleteAlumno(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
