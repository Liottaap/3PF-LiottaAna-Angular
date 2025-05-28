import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Curso } from './models/curso.model';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  constructor(private httpClient: HttpClient){}
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>('http://localhost:3000/cursos')

  }

  /* private baseUrl = 'http://localhost:3000/cursos';
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseUrl)
  }
  
  updateCurso(id:number, curso?:Curso[]){
    return this.http.get<Curso[]>(`${this.baseUrl}/`)
  }
  deleteCurso(id:number):Observable<any>{
    console.log(id)
    return this.http.delete(`${this.baseUrl}/${id}`);
  } */

}


