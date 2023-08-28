import { Component, Input, OnInit} from '@angular/core';
import { Plat } from '../Models/Plat.model';

@Component({
  selector: 'app-mes-plats',
  templateUrl: './mes-plats.component.html',
  styleUrls: ['./mes-plats.component.scss']
})
export class MesPlatsComponent implements OnInit{

  @Input() mesPlats!: Plat

  ngOnInit(): void {
  }
  
}
