import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageplat',
  templateUrl: './pageplat.component.html',
  styleUrls: ['./pageplat.component.scss']
})
export class PageplatComponent implements OnInit {
  formData = {
    nom: null,
    des: null,
    calorie: null
  };

  constructor() {}

  ngOnInit(): void {
    // Vous pouvez mettre du code ici si nécessaire
  }
}
