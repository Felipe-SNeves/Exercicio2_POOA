import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	cursos = [
		{
			nome: "Compiladores",
			cargaHoraria: 40
		},
		{
			nome: "Algoritmos",
			cargaHoraria: 60
		}
	];

	adicionar (curso) {
		this.cursos = [curso, ...this.cursos];
	} 
}
