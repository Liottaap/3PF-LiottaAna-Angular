import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from './cursos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl = 'http://localhost:3000/cursos';
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseUrl)
  }
  
  updateCurso(id:number, curso:Curso[]){
    return this.http.get<Curso[]>(`${this.baseUrl}/`)
  }
}
