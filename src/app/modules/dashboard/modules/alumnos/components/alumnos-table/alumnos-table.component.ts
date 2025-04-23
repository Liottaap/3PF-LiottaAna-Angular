import {EventEmitter, Input, Output } from '@angular/core'

import { Component } from '@angular/core';
export interface AlumnosList {
  nombre: string;
  position: number;
  apellido: string;
  estado: string;
}



@Component({
  selector: 'app-alumnos-table',
  standalone: false,
  templateUrl: './alumnos-table.component.html',
  styles: ``
})
export class AlumnosTableComponent {
  displayedColumns: string[] = ['demo-position', 'demo-nombre', 'demo-apellido', 'demo-estado', "actions"];


  @Input()
  dataSource: AlumnosList[] = [];

  @Output()
  deleteAlumn = new EventEmitter<number>()

  @Output()
  editAlumn = new EventEmitter<AlumnosList>()
}
