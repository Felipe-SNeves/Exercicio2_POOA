import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoAdicionarComponent } from './curso-adicionar/curso-adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    CursoAdicionarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
