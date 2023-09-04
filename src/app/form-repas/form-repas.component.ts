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
  urlRegex!:RegExp

  constructor(private formBuilder:FormBuilder,private mesPlatsServices:mesPlatsService, private router:Router){}

  ngOnInit(): void {
    this.urlRegex=this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/
    this.formRepas= this.formBuilder.group({
      nomDuPlat : [null,Validators.required],
      description : [null],
      photo : [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      nombreCalorie:[null,Validators.required],
    },
    {
      updateOn:'blur'
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
