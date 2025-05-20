import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 ¡IMPORTANTE!

import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {MatListModule} from '@angular/material/list';
import { AlumnosModule } from "./modules/alumnos/alumnos.module";
import { DashboardRoutingModule } from './dashboard-routing.module';
@NgModule({
  declarations: [DashboardComponent, NavMenuComponent ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    AlumnosModule,
    RouterModule,
    DashboardRoutingModule,

],
  exports: [DashboardComponent]
})
export class DashboardModule { }
