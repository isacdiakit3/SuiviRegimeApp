import { Injectable } from "@angular/core";
import { Plat } from "../Models/Plat.model";

@Injectable({
    providedIn:'root'
})
export class mesPlatsService {
    mesPlats:Plat[] = [ 
        {
          id:1,
        nomDuPlat: "Haricot Vert",
        description:"plat equilibré",
        nombreCalorie: 30,
        photo:"https://img.cuisineaz.com/2880x1920/2020/07/28/i154660-haricot-plat.jpeg"
        },
        
          
        {
          id:2,
          nomDuPlat: "Salade",
          description:"plat vegetarien",
          nombreCalorie: 35,
          photo:"https://img-cdn.oliveoiltimes.com/cb:XkPz.23f19/w:auto/h:auto/q:67/ig:avif/https://www.oliveoiltimes.com/wp-content/uploads/2020/09/35201269_m-scaled.jpg"
        }
        ]

        getAllMesPlats():Plat[]{
            return this.mesPlats
        }
        getMesPlatsbyId(monPlatid:number): Plat{
            const monPlat = this.mesPlats.find(mesPlats => mesPlats.id ===monPlatid)
            if (!monPlat){
                throw new Error("Repas non trouvé")
            }else{
                
                return monPlat
            }
        }
}