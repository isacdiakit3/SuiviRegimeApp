import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';
import { Observable,map } from 'rxjs';
import { Plat } from '../Models/Plat.model';
import { mesPlatsService } from '../services/mes-plats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-repas',
  templateUrl: './form-repas.component.html',
  styleUrls: ['./form-repas.component.scss']
})
export class FormRepasComponent implements OnInit{

  formRepas!:FormGroup
  repasPreview$!:Observable<Plat>

  constructor(private formBuilder:FormBuilder,private mesPlatsServices:mesPlatsService, private router:Router){}

  ngOnInit(): void {
    this.formRepas= this.formBuilder.group({
      nomDuPlat : [null,Validators.required],
      description : [null],
      photo : [null,Validators.required],
      nombreCalorie:[null,Validators.required],
    }
    )
    this.repasPreview$ = this.formRepas.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id : 0
      }))
    )
  }
  onSubmitForm(){
   this.mesPlatsServices.onAddPlats(this.formRepas.value)
   this.router.navigateByUrl('/mesPlats')
  }

}
