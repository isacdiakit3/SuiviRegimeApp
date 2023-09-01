import { Component, Input, OnInit} from '@angular/core';
import { Plat } from '../Models/Plat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-plats',
  templateUrl: './mes-plats.component.html',
  styleUrls: ['./mes-plats.component.scss']
})
export class MesPlatsComponent implements OnInit{

  constructor(private router:Router){}

  @Input() mesPlats!: Plat

  ngOnInit(): void {

  }
  onVoirMesplats(){
    this.router.navigateByUrl(`mesPlats/${this.mesPlats.id}`)
  }
  
  
}
