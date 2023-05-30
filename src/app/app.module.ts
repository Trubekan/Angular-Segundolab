import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { RegistrosComponent } from './registros/registros.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
