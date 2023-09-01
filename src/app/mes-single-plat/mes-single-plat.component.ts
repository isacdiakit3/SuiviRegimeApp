import { Component,Input } from '@angular/core';
import { Plat } from '../Models/Plat.model';
import { mesPlatsService } from '../services/mes-plats.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-mes-single-plat',
  templateUrl: './mes-single-plat.component.html',
  styleUrls: ['./mes-single-plat.component.scss']
})
export class MesSinglePlatComponent {
  mesPlats!: Plat

  constructor(private mesPlatsService:mesPlatsService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    const mesPlatsid = +this.route.snapshot.params['id']
    this.mesPlats = this.mesPlatsService.getMesPlatsbyId(mesPlatsid)
  }

  onSupp(){
    this.mesPlatsService.onSupprimerPlat(this.mesPlats.id)
    this.router.navigateByUrl("/mesPlats")
  }

  onEdit(){
    this.mesPlatsService.onModifierPlat(this.mesPlats)
    this.router.navigateByUrl("/formRepas")
  }
}
