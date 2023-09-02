import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesPlatsListeComponent } from './mes-plats-liste/mes-plats-liste.component';
import { HeaderPlatComponent } from './header-plat/header-plat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MesSinglePlatComponent } from './mes-single-plat/mes-single-plat.component';
import { PagePlanificationComponent } from './page-planification/page-planification.component';
import { CalorieComponent } from './calorie/calorie.component';
import { PageObjectifComponent } from './page-objectif/page-objectif.component';
import { FormRepasComponent } from './form-repas/form-repas.component';

const routes: Routes = [
  {
   path:'mesPlats', component:MesPlatsListeComponent
  },
  {
    path:"",component:AcceuilComponent
  },
  {
    path:"mesPlats/:id",component:MesSinglePlatComponent
  },
  {
    path:"page-planification",component:PagePlanificationComponent
  },
  {
    path:"calorie",component:CalorieComponent
  },
  {
    path:"objectif",component:PageObjectifComponent
  },
  {
    path:"formRepas", component:FormRepasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
