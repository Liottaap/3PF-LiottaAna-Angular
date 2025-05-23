import {EventEmitter, Input, Output } from '@angular/core'

import { Component } from '@angular/core';
import { AuthService } from '../../../../../../core/services/auth.services';
import { Observable } from 'rxjs';
import { User } from '../../../../../../core/models';

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

  
  authUser$: Observable<User | null>

  constructor(private authService: AuthService){
    this.authUser$ = this.authService.authUser$
  }


  StateBgColor(estado: string): string {
    switch (estado) {
      case 'Aprobado':
        return 'bg-success';
      case 'Desaprobado':
        return 'bg-danger';
      default:
        return '';
    }
  } 

  onEdit(alumno: AlumnosList): void {
    this.editAlumn.emit(alumno);
}

}