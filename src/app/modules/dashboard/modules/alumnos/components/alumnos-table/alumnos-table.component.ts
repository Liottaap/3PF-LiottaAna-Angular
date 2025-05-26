import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../../../core/services/auth.services';
import { User } from '../../../../../../core/models';
import { Alumnos } from '../../alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-table',
  standalone: false,
  templateUrl: './alumnos-table.component.html',
  styles: ``
})
export class AlumnosTableComponent {
  // Columnas visibles en la tabla
  displayedColumns: string[] = ['demo-id', 'demo-nombre', 'demo-apellido', 'demo-estado', 'actions'];

  // Datos recibidos
  @Input() dataSource: Alumnos[] = [];

  // Eventos hacia el componente padre
  @Output() deleteAlumn = new EventEmitter<number>();
  @Output() editAlumn = new EventEmitter<Alumnos>();

  authUser$: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.authUser$ = this.authService.authUser$;
  }

  // Método para asignar color según estado
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

  // Emitir evento de edición
  onEdit(alumno: Alumnos): void {
    this.editAlumn.emit(alumno);
  }

  // Emitir evento de eliminación
  onDelete(id: number): void {
    this.deleteAlumn.emit(id);
  }
  test(id: number): void {
    console.log('Navegando a detalle', id);
    this.router.navigate(['/dashboard/alumnos/detalle', id]);
  }
}
