import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { KeysPipe } from "./pipes/keys.pipe";
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AgregarComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
