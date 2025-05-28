import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CursosCardModule } from './components/cursos-card/cursos-card.module';
import { StoreModule } from '@ngrx/store';
import { cursosFeature } from './store/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    CursosCardModule,
    MatCardModule,
    StoreModule.forFeature(cursosFeature),
    EffectsModule.forFeature([CursosEffects]),
    CursosComponent
  ],
})
export class CursosModule { }
