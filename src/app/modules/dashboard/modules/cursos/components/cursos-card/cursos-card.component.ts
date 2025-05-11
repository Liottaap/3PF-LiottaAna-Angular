import { Component, Input } from '@angular/core';
import { Curso } from '../../cursos.component';

@Component({
  selector: 'app-cursos-card',
  standalone: false,
  templateUrl: './cursos-card.component.html',
  styleUrl: './cursos-card.component.scss'
})

export class CursosCardComponent {
  @Input() curso!: Curso;
}
