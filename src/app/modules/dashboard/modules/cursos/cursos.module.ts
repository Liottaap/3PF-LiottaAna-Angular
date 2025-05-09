import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
