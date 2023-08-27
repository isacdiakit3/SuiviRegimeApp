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
import { PagePlatComponent } from './pageplat/pageplat.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    PagePlatComponent,
    JournallComponent,
    PlanificationComponent,
    TodolistComponent
   
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
