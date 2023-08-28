import { FormGroup } from '@angular/forms';
import { Injectable, EventEmitter } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // Clé pour le stockage local
  private storageKey = 'todolists';
  // enregistrement des données de todolist
  private todolists: { text: string; completed: boolean; quantity: number }[][] = [];
  constructor() { }
  //enregistrer les plats en local
  saveFormsToLocalStorage(forms: any[]): void {
    localStorage.setItem('savedForms', JSON.stringify(forms));
  }

  //Une methode pour enregistrer les todolist
  addTodolist(tasks: { text: string; quantity: number;completed: boolean;  }[]) {
    
    const todolists = this. getTodolists();
    todolists.push(tasks);
    this.storeTodolists(todolists);
  }
  // obtenir les todolist 
  getTodolists() {
    return this.getStoredTodolists();
  }
  //Methode pour récuperer les données dans le stockage local
  private getStoredTodolists(): { text: string; completed: boolean; quantity: number }[][] {
    const storedTodolists = localStorage.getItem(this.storageKey);
    return storedTodolists ? JSON.parse(storedTodolists) : [];
  }
  //cette méthode stok les données dans le stockage local
  public storeTodolists(todolists: { text: string; completed: boolean; quantity: number }[][]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todolists));
  }

  // Enregistrez les données du formulaire
   savedForms: any[] = []; 
  saveFormGroup(form: any): void {
    this.savedForms.push(form);
    console.log('Formulaire enregistré :', this.savedForms);
  }
    // Renvoyez la liste des formulaires enregistrés
  getSavedForms(): any[] {
    return this.savedForms;

    }
    

}
