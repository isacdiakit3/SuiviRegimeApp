import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { JournallComponent } from './modules/general/journall/journall.component';
import { PlanificationComponent } from './planification/planification.component';
import { PageplatComponent } from './pageplat/pageplat.component';
@NgModule({
  declarations: [
    AppComponent,
    PageplatComponent,
    JournallComponent,
    PlanificationComponent
   
  ],
  exports: [
    MatListModule // ajoutez le suffixe "Module" ici
  ],

  imports: [
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule 
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
