import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../cursos.service';
import { AuthService } from '../../../../../../core/services/auth.services';
import { User } from '../../../../../../core/models';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-cursos-card',
  standalone: false,
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.scss']
})
export class CursosCardComponent implements OnInit {
  @Input() curso!: Curso;
  @Output() cursoEditado = new EventEmitter<Curso>();
  @Output() cursoBorrado = new EventEmitter<number>();

  editMode = false;
  cursoForm!: FormGroup;
  authUser$: Observable<User | null>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private authService: AuthService,
    private cursoService: CursosService
  ) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.cursoForm = this.fb.group({
      nombre: [this.curso.nombre, Validators.required],
      duracion: [this.curso.duracion, Validators.required],
      descripcion: [this.curso.descripcion],
    });
  }

/*   toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.cursoForm.patchValue({
        nombre: this.curso.nombre,
        duracion: this.curso.duracion,
        descripcion: this.curso.descripcion,
      });
    }
  }

  guardarCambios() {
    if (this.cursoForm.valid) {
      const cursoActualizado = { ...this.curso, ...this.cursoForm.value };
      this.cursoEditado.emit(cursoActualizado);
      this.editMode = false;
    }
  }

  borrarCurso() {
    console.log('Curso borrado:', this.curso.id);
    this.cursoBorrado.emit(this.curso.id);
  } */
}