import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit{
  daysOfWeek: string[] = [
  'jour1', 
  'jour2', 
  'jour3', 
  'jour4', 
  'jour5', 
  'jour6',
   'jour7',
   'jour8',
   'jour9',
   'jour10',
   'jour11',
   'jour12',
   'jour13',
   'jour14',
   'jour15',
   'jour16',
   'jour17',
   'jour18',
   'jour19',
   'jour20',
   'jour21',
   'jour22',
   'jour23',
   'jour24',
   'jour25',
   'jour26',
   'jour27',
   'jour28',
   'jour29',
   'jour30'
   
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
