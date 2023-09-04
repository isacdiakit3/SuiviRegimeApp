import { Component,OnInit } from '@angular/core';
import { Planification } from '../Models/planification';
import { PlanificationService } from '../services/planification.service';

@Component({
  selector: 'app-planification-liste',
  templateUrl: './planification-liste.component.html',
  styleUrls: ['./planification-liste.component.scss']
})
export class PlanificationListeComponent implements OnInit{

  planifications!:Planification[]

  constructor(private service:PlanificationService){}
  ngOnInit(): void {

    this.planifications = this.service.getAllPlanification()
    
  }

}
