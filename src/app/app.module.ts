import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesPlatsComponent } from './mes-plats/mes-plats.component';
import { MesPlatsListeComponent } from './mes-plats-liste/mes-plats-liste.component';
import { HeaderPlatComponent } from './header-plat/header-plat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    MesPlatsComponent,
    MesPlatsListeComponent,
    HeaderPlatComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
