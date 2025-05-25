import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../../core/guards/admin.guard';


const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./modules/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },
  {
    path: 'cursos',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}