import { Component } from '@angular/core';

@Component({
	selector: 'app-curso',
	templateUrl: './appCurso.component.html'
})

export class AppCursoExibir {

	private nome: string;
	private cargaHoraria: number;

	constructor(){
		this.setNome("Novo Curso");
		this.setCargaHoraria(40);
	}

	setNome(n){
		this.nome = n;
	}

	getNome(){
		return this.nome;
	}

	setCargaHoraria(h){
		this.cargaHoraria = h;
	}

	getCargaHoraria(){
		return this.cargaHoraria;
	}

}
