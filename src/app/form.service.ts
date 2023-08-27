import { FormGroup } from '@angular/forms';
import { Injectable, EventEmitter } from '@angular/core';

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
  addTodolist(tasks: { text: string; completed: boolean; quantity: number }[]) {
    
    const todolists = this. getTodolists();
    todolists.push(tasks);
    this.storeTodolists(todolists);
  }
  // obtenir les todolist 
  getTodolists() {
    return this.getStoredTodolists();
  }
  //
  private getStoredTodolists(): { text: string; completed: boolean; quantity: number }[][] {
    const storedTodolists = localStorage.getItem(this.storageKey);
    return storedTodolists ? JSON.parse(storedTodolists) : [];
  }
  //
  private storeTodolists(todolists: { text: string; completed: boolean; quantity: number }[][]) {
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
