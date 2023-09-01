import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mesPlatsService } from '../services/mes-plats.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit{
   
  resultat !:number


  constructor(private service:mesPlatsService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {

    this.resultat =this.service.onCalculBRM(this.data.userForm);

  }

  
}