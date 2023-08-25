import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { JournallComponent } from './modules/general/journall/journall.component';
import { PageplatComponent } from './pageplat/pageplat.component';


const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'accueil', component: AccueilComponent, },
  { path: 'journall', component: JournallComponent, },
  { path: 'pageplat', component: PageplatComponent, }
  // ... ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PageplatComponent],
  
})
export class AppRoutingModule { }
