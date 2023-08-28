import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesPlatsListeComponent } from './mes-plats-liste/mes-plats-liste.component';
import { HeaderPlatComponent } from './header-plat/header-plat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [{
  path:'mesPlats', component:MesPlatsListeComponent
},
{
  path:"",component:AcceuilComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
