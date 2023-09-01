import { Injectable } from "@angular/core";
import { Plat } from "../Models/Plat.model";

@Injectable({
    providedIn: 'root'
})
export class mesPlatsService {

    poids: number = 0
    taille: number = 0
    age: number = 0
    genre!: string
    sport!:string
    mesPlats: Plat[] = [
        {
            id: 1,
            nomDuPlat: "Haricot Vert",
            description: "plat equilibré",
            nombreCalorie: 30,
            photo: "https://img.cuisineaz.com/2880x1920/2020/07/28/i154660-haricot-plat.jpeg"
        },


        {
            id: 2,
            nomDuPlat: "Salade",
            description: "plat vegetarien",
            nombreCalorie: 35,
            photo: "https://img-cdn.oliveoiltimes.com/cb:XkPz.23f19/w:auto/h:auto/q:67/ig:avif/https://www.oliveoiltimes.com/wp-content/uploads/2020/09/35201269_m-scaled.jpg"
        }
    ]

    getAllMesPlats(): Plat[] {
        return this.mesPlats
    }
    getMesPlatsbyId(monPlatid: number): Plat {
        const monPlat = this.mesPlats.find(mesPlats => mesPlats.id === monPlatid)
        if (!monPlat) {
            throw new Error("Repas non trouvé")
        } else {

            return monPlat
        }
    }
    onAddPlats(formValue: { nomDuPlat: string, description?: string, nombreCalorie: number, photo: string }) {
        const monPlat: Plat = {
            ...formValue,
            id: this.mesPlats[this.mesPlats.length - 1].id + 1
        }
        this.mesPlats.push(monPlat)
    }

    onModifierPlat(plat: Plat) {
        const repas = this.mesPlats.findIndex(p => p.id === plat.id)
        this.mesPlats[repas] = plat
    }

    calculeDeCalorie(user: any ) {
        if(user.sport == "1"){
            
            return this.onCalculBRM(user)*1.2;
        }
        else if (user.sport == "2"){
            return this.onCalculBRM(user)*1.375;
        }else if (user.sport == "3"){
            return this.onCalculBRM(user)*1.55;
        }else if (user.sport == "4"){
            return this.onCalculBRM(user)*1.725;
        }else if (user.sport == "5"){
            return this.onCalculBRM(user)*1.9;
        }else{
            return this.onCalculBRM(user)*0;
        }
         
        
    }

    onCalculBRM(user: any): number {
            console.log(user);
            console.log(13.397 * user.poids)

        if (user.genre === 'Homme') {
            let BRMH = 88.362 + (13.397 * user.poids) + (4.799 * user.taille) - (5.677 * user.age)
            return (BRMH)
        } else {
            const BRMF = 447.593 + (9.247 * user.poids) + (3.098 * user.taille) - (4.330 * user.age)
            return (BRMF)
        }
    }

    onSupprimerPlat(id: number) {
        const repas = this.mesPlats.findIndex(p => p.id === id)
        this.mesPlats.splice(repas, 1)
    }
    

    // onDeletePlat(mesPlatsid:number) :string{
    //     const repas = this.mesPlats.find(mesPlats => mesPlats.id === mesPlatsid)
    //     if(!repas){
    //         throw new Error("Repas non trouvé");


    //     }else{
    //         this.mesPlats.pop()
    //         return "Suppression effectuer"
    //     }


    // }
    
    

    // onCalculCalorie(): number {
    //     if (this.sport === "1") {
    //         const resultat = this.onCalculBRM(this.genre) * 1.2
    //         return (resultat)
    //     } else {
    //         return 1
    //     }
    // }
}