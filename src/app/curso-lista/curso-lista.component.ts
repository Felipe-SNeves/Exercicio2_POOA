import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
})

export class CursoListaComponent {

	@Input() curso;
}
