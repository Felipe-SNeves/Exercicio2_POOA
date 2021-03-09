import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-adicionar',
  templateUrl: './curso-adicionar.component.html',
})

export class CursoAdicionarComponent {

	@Output() cursoAdicionado = new EventEmitter();

	adicionar (nome, carga) {
		const curso = {
			nome: nome,
			cargaHoraria: carga
		};

		this.cursoAdicionado.emit(curso);
	}
}
