import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCursoExibir } from './appCurso/appCurso.component';
import { AppColecaoExibir } from './appColecao/appColecao.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCursoExibir,
    AppColecaoExibir
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
