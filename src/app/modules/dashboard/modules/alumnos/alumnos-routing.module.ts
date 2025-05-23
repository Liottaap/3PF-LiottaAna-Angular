import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { DetalleAlumnoComponent } from './pages/detalle-alumno/detalle-alumno.component';
import { authenticationGuard } from '../../../../core/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'detalle/:position',
    component: DetalleAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
