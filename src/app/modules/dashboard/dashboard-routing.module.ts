import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: 'alumnos',
        loadChildren: () => import('./modules/alumnos/alumnos.module').then(m => m.AlumnosModule)
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
      },
      {
        path: 'inscripcion',
        loadChildren: () =>
          import('./modules/inscripcion/inscripcion.module').then(
            (m) => m.InscripcionModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}