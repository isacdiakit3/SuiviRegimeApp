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



    calculeDeCalorie(user: any) {
        if(user.sport == "1")
            return this.onCalculBRM(user);
        else{
            console.log(user)
            return 1;
        }
         
        
    }

    onCalculBRM(user: any): number {

        if (user.genre === 'Homme' && user.sport==='1') {
            let BRMH = 88.362 + (13.397 * user.poids) + (4.799 * user.taille) - (5.677 * user.age)
            const resultat = (BRMH*1.2)
            return (resultat)
        } else if(user.genre === 'Homme' && user.sport==='2'){
            const BRMH = 447.593 + (9.247 * user.poids) + (3.098 * user.taille) - (4.330 * user.age)
            const resultat = (BRMH*1.375)
            return (resultat)
        }else if (user.genre === 'Homme' && user.sport==='3'){
            let BRMH = 88.362 + (13.397 * user.poids) + (4.799 * user.taille) - (5.677 * user.age)
            const resultat = (BRMH*1.55)
            return (resultat)
        }else if (user.genre === 'Homme' && user.sport==='4'){
            let BRMH = 88.362 + (13.397 * user.poids) + (4.799 * user.taille) - (5.677 * user.age)
            const resultat = (BRMH*1.725)
            return (resultat)
        }
        else if (user.genre === 'Homme' && user.sport==='5'){
            let BRMH = 88.362 + (13.397 * user.poids) + (4.799 * user.taille) - (5.677 * user.age)
            const resultat = (BRMH*1.9)
            return (resultat)
        }else{
            return 2
        }


    }

    ///////////////////////FORMULE

    // totalCalorie: number = 0;

    // calculercalorie(): void {
    //   let bmr: number;
  
    //   if (this.genre === 'Homme') {
    //     bmr = 88.362 + (13.397 * +this.poids) + (4.799 * this.taille) - (5.677 * this.age);
    //   } else {
    //     bmr = 447.593 + (9.247 * this.poids) + (3.098 * this.taille) - (4.330 * this.age);
    //   }
  
    //   let calculeDeCalorie!: number;
  
    //   switch (this.sport) {
    //     case '1':
    //       calculeDeCalorie = 1.2;
    //       break;
    //     case '2':
    //       calculeDeCalorie = 1.375;
    //       break;
    //     case '3':
    //       calculeDeCalorie = 1.55;
    //       break;
    //     case '4':
    //       calculeDeCalorie = 1.725;
    //       break;
    //     case '5':
    //       calculeDeCalorie = 1.9;
    //       break;
    //     default:
    //       break;
    //   }
  
    //   this.totalCalorie = bmr * calculeDeCalorie;
  
    //   console.log(this.totalCalorie)
    // }

    
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