import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
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
      },
      { path: '', redirectTo: 'cursos', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}