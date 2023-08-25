import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageplatComponent } from 'src/app/pageplat/pageplat.component';
import { AccueilComponent } from '../accueil/accueil.component';
@Component({
  selector: 'app-journall',
  templateUrl: './journall.component.html',
  styleUrls: ['./journall.component.scss']
})
export class JournallComponent  {
  

    constructor(private dialog : MatDialog){}

    openDialog(){
      this.dialog.open(PageplatComponent);
    }
}
