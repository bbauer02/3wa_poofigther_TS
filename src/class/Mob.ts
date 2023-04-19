import { Character } from "./Character";

export class Mob extends Character {
    constructor(name: string, hp: number) {
        super(name, hp);
    }

    
    public attack(target: Character) : void {
        console.log("attack");
    }

    public isAggro() : boolean {
       return false;
    }
        
}


