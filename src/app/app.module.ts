import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule} from '@angular/forms'
import{MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesPlatsComponent } from './mes-plats/mes-plats.component';
import { MesPlatsListeComponent } from './mes-plats-liste/mes-plats-liste.component';
import { HeaderPlatComponent } from './header-plat/header-plat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MesSinglePlatComponent } from './mes-single-plat/mes-single-plat.component';
import { PlanificationComponent } from './planification/planification.component';
import { PagePlanificationComponent } from './page-planification/page-planification.component';
import { CalorieComponent } from './calorie/calorie.component';
import { PageObjectifComponent } from './page-objectif/page-objectif.component';
import { FormRepasComponent } from './form-repas/form-repas.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MesPlatsComponent,
    MesPlatsListeComponent,
    HeaderPlatComponent,
    AcceuilComponent,
    MesSinglePlatComponent,
    PlanificationComponent,
    PagePlanificationComponent,
    CalorieComponent,
    PageObjectifComponent,
    FormRepasComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
