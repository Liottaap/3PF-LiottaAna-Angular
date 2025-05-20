import { Component, Input } from '@angular/core';
import { Curso } from '../../cursos.component';
import { decrement, increment } from '../../../../../../store/counter/counter.action';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectCounterState } from '../../../../../../store/counter/counter.selector';

@Component({
  selector: 'app-cursos-card',
  standalone: false,
  templateUrl: './cursos-card.component.html',
  styleUrl: './cursos-card.component.scss'
})
export class CursosCardComponent {
  @Input() curso!: Curso;
  count$ : Observable<number>

  constructor(private store: Store) {
    this.count$ = this.store
      .select(selectCounterState)
      .pipe(map((state) => state.count));
  }


  incrementarContador() {
    this.store.dispatch(increment());
  }

  decrementarContador() {
    this.store.dispatch(decrement());
  }
}
