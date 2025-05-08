import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionComponent } from './inscripcion.component';
import { InscripcionRouting } from './inscripcion-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [InscripcionComponent],
  imports: [
    CommonModule,
    InscripcionRouting,
    SharedModule
  ]
})
export class InscripcionModule { }
