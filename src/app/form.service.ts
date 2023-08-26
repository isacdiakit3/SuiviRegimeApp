import { FormGroup } from '@angular/forms';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // private formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
   savedForms: any[] = []; 

  // submitForm(form: FormGroup) {
  //   this.formSubmitted.emit(form);
  // }

  saveFormGroup(form: any): void {
    // Enregistrez les données du formulaire
    this.savedForms.push(form);
    console.log('Formulaire enregistré :', this.savedForms);
  }

  getSavedForms(): any[] {
    // Renvoyez la liste des formulaires enregistrés
    return this.savedForms;
  }
}
