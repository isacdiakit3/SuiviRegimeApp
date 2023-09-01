import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FormGroup, NgForm } from "@angular/forms";
import { mesPlatsService } from '../services/mes-plats.service';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private service: mesPlatsService) { }

  poids: number = 0;
  taille: number = 0;
  age: number = 0;
  genre!: string;
  sport!: number;

  // totalCalorie: number = 0;

  // caloulercalorie(): void {
  //   let bmr: number;

  //   if (this.genre === 'homme') {
  //     bmr = 88.362 + (13.397 * +this.poids) + (4.799 * this.taille) - (5.677 * this.age);
  //   } else {
  //     bmr = 447.593 + (9.247 * this.poids) + (3.098 * this.taille) - (4.330 * this.age);
  //   }

  //   let calculeDeCalorie!: number;

  //   switch (this.sport) {
  //     case 1:
  //       calculeDeCalorie = 1.2;
  //       break;
  //     case 2:
  //       calculeDeCalorie = 1.375;
  //       break;
  //     case 3:
  //       calculeDeCalorie = 1.55;
  //       break;
  //     case 4:
  //       calculeDeCalorie = 1.725;
  //       break;
  //     case 5:
  //       calculeDeCalorie = 1.9;
  //       break;
  //     default:
  //       break;
  //   }

  //   this.totalCalorie = bmr * calculeDeCalorie;

  //   console.log(this.totalCalorie)
  // }

  ngOnInit(): void {
  }

  openDialog(userForm: any) {
    this.dialogRef.open(PopUpComponent, {
      data: {
        user: userForm,
      },
    });
  }

  onSubmit(form: NgForm) {
    this.openDialog(form.value);
    form.reset();
    

  }
}
