import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../../cursos.component';
import { decrement, increment } from '../../../../../../store/counter/counter.action';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectCounterState } from '../../../../../../store/counter/counter.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../cursos.service';
import { AuthService } from '../../../../../../core/services/auth.services';
import { User } from '../../../../../../core/models';

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

  count$ : Observable<number>;
  editMode = false;
  cursoForm!: FormGroup;
  authUser$: Observable<User | null>;

   
  constructor(private store: Store, private fb: FormBuilder,private authService: AuthService, private cursoService: CursosService) {

    this.authUser$ = this.authService.authUser$;
    this.count$ = this.store
      .select(selectCounterState)
      .pipe(map(state => state.count));
  }

  ngOnInit() {

    this.cursoForm = this.fb.group({
      nombre: [this.curso.nombre, Validators.required],
      duracion: [this.curso.duracion, Validators.required],
      descripcion: [this.curso.descripcion],
    });
  }

  incrementarContador() {
    this.store.dispatch(increment());
  }

  decrementarContador() {
    this.store.dispatch(decrement());
  }

  toggleEdit() {
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
      // Emitir hacia el padre o manejar la actualización con un servicio
      this.cursoEditado.emit(cursoActualizado);
      this.editMode = false;
    }
  }

  borrarCurso() {
    console.log('curso borrado',this.curso.id)
    const cursoDel= { ...this.curso, ...this.cursoForm.value };
    this.cursoBorrado.emit(this.curso.id)
     
  }
}