import { Injectable  } from "@angular/core";
import { Planification } from "../Models/planification";
import { Plat } from "../Models/Plat.model";

@Injectable({
    providedIn:'root'
})
export class PlanificationService{

    planifications:Planification[]=[
    {
        id:1,
        repas:"salade",
        quantite:3,
        semaine:1,
        jour:1
    },
    {
        id:2,
        repas:"haricot vert",
        quantite:2  ,
        semaine:1,
        jour:2
    }
    ]
        

    getAllPlanification() :Planification []{
       return this.planifications
 
   }

   getPlanificationById(planificationId:number){
    const planification = this.planifications.find(planification => planification.id===planificationId)
    if(!planification){
        throw new Error("Planification non trouvé !");
        
    }else{
       return planification
    }
   }

//    onAddPlanification(planification:Planification){



//    }


   


}