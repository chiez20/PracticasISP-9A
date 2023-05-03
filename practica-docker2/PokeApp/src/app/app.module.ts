import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ServicioComponent } from './services/servicio/servicio.component';
import { PokemonservicioComponent } from './services/pokemonservicio/pokemonservicio.component';
import { PrincipalComponent } from './interfaces/principal/principal.component';
import { FuncionComponent } from './pipe/funcion/funcion.component';
import { ClaseprincipalComponent } from './clases/claseprincipal/claseprincipal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeTableComponent,
    PokeDetailComponent,
    FooterComponent,
    PruebaComponent,
    ServicioComponent,
    PokemonservicioComponent,
    PrincipalComponent,
    FuncionComponent,
    ClaseprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
