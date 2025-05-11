import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from './cursos.component';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular Básico',
      descripcion: 'Introducción a Angular y sus componentes principales.',
      duracion: '6 semanas'
    },
    {
      id: 2,
      nombre: 'TypeScript Avanzado',
      descripcion: 'Profundizá en TypeScript, interfaces, clases y tipos avanzados.',
      duracion: '4 semanas'
    },
    {
      id: 3,
      nombre: 'JavaScript desde Cero',
      descripcion: 'Aprendé los fundamentos de JavaScript moderno paso a paso.',
      duracion: '5 semanas'
    },
    {
      id: 4,
      nombre: 'HTML y CSS Profesional',
      descripcion: 'Dominá la maquetación web con Flexbox, Grid y diseño responsivo.',
      duracion: '3 semanas'
    },
    {
      id: 5,
      nombre: 'React para Principiantes',
      descripcion: 'Construí interfaces reactivas con React, JSX y hooks.',
      duracion: '6 semanas'
    },
    {
      id: 6,
      nombre: 'Node.js y Express',
      descripcion: 'Creá servidores y APIs REST con Node.js y Express.',
      duracion: '4 semanas'
    },
    {
      id: 7,
      nombre: 'Bases de Datos con MongoDB',
      descripcion: 'Aprendé a modelar datos y manejar una base NoSQL con MongoDB.',
      duracion: '3 semanas'
    },
    {
      id: 8,
      nombre: 'Git y GitHub',
      descripcion: 'Gestioná el control de versiones y colaborá en proyectos usando Git.',
      duracion: '2 semanas'
    },
    {
      id: 9,
      nombre: 'Diseño UX/UI',
      descripcion: 'Principios de diseño centrado en el usuario y prototipado con Figma.',
      duracion: '5 semanas'
    },
    {
      id: 10,
      nombre: 'Testing en Angular',
      descripcion: 'Escribí pruebas unitarias y de integración con Jasmine y Karma.',
      duracion: '3 semanas'
    }
  ];
  constructor() { }

  getCursos(): Observable<Curso[]>{
    return of(this.cursos)
  }
}
