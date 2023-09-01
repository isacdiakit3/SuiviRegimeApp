import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FormGroup,NgForm } from "@angular/forms";
import { mesPlatsService } from '../services/mes-plats.service';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent implements OnInit {


  constructor( private dialogRef : MatDialog , private service:mesPlatsService){}


  poids:number = 0
  taille:number =0
  age:number= 0
  genre!:string
  sport!:number

  ngOnInit(): void {
    
  }

  openDialog(userForm : any){
    this.dialogRef.open(PopUpComponent, {
      data: {
        user: userForm,
      },
    });
  }

  onSubmit(form:NgForm){
    this.openDialog(form.value);
    form.reset();
  }


 
}
