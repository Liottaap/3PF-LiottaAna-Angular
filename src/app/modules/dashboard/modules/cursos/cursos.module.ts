import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { MatCardModule } from '@angular/material/card';
import { AlumnosComponent } from '../alumnos/alumnos.component';



@NgModule({
  declarations: [CursosCardComponent, CursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MatCardModule,
    MatCardModule
  ],
})
export class CursosModule { }
