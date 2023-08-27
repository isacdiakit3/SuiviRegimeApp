import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pageplat } from '../pageplat';

@Component({
  selector: 'app-pageplat',
  templateUrl: './pageplat.component.html',
  styleUrls: ['./pageplat.component.scss']
})
export class PagePlatComponent implements OnInit {
  newrepas: Pageplat = new Pageplat(1, '', '', '', 0);
  platForm: FormGroup;
  savedForms: Pageplat[] = []; // Pour stocker les données localement

  constructor(private formBuilder: FormBuilder, private formService: FormService) {
    this.platForm = this.formBuilder.group({
      id: [null],
      image: [null],
      nom: ['', Validators.required],
      des: ['', Validators.required],
      calorie: ['', Validators.required],
    });

    // Charger les données depuis le stockage local au chargement
    const savedFormsFromLocalStorage = localStorage.getItem('savedForms');
    console.log('savedFormsFromLocalStorage', savedFormsFromLocalStorage);
    if (savedFormsFromLocalStorage) {
      this.savedForms = JSON.parse(savedFormsFromLocalStorage);
    }
  }

  // ...

  onSubmit(): void {
    if (this.platForm.valid) {
      this.newrepas = this.platForm.value;
      this.formService.saveFormGroup(this.newrepas);
      this.savedForms.push(this.newrepas); // Ajoutez la nouvelle entrée aux données locales
      this.formService.saveFormsToLocalStorage(this.savedForms); // Sauvegardez dans le stockage local
      this.platForm.reset(); // Réinitialise le formulaire
    }
  }

  // ...

  ngOnInit() {
    // Initialisation si nécessaire
  }
}
