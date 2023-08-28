import { Component , OnInit} from '@angular/core';
import { Plat } from '../Models/Plat.model';
import { mesPlatsService } from '../services/mes-plats.service';

@Component({
  selector: 'app-mes-plats-liste',
  templateUrl: './mes-plats-liste.component.html',
  styleUrls: ['./mes-plats-liste.component.scss']
})
export class MesPlatsListeComponent implements OnInit{

  mesPlats!:Plat[]
  constructor(private mesPlatsService:mesPlatsService){}
  ngOnInit(): void {
    this.mesPlats = this.mesPlatsService.getAllMesPlats()
  }
}
