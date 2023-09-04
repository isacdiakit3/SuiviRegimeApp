import { Component,OnInit ,Input} from '@angular/core';
import { Planification } from '../Models/planification';
import { Plat } from '../Models/Plat.model';


@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit{

  @Input() planification!:Planification
  

  ngOnInit(): void {
    
  }

}
