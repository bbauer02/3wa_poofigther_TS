import { Mob } from "./Mob";
import { Character } from "./Character";

export class Elite extends Mob {
    constructor(name: string, hp: number) {
        super(name, hp);
    }
    
    public specialAttack(target: Character) : void {
        console.log("specialAttack");
    }

}

