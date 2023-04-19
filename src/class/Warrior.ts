import { Character } from "./Character";
import { Playable } from "../interfaces/Playable";

export class Warrior extends Character  implements Playable {
    constructor(name: string, hp: number, private _rage: number) {
        super(name, hp);
    }

    get rage() {
        return this._rage;
    }

    set rage(rage: number) {
        this._rage = rage;
    }
    
    public attack(target: Character) : void {
        console.log("attack");
    }

    public slash(target: Character) : void {
        console.log("slash");
    }

    public move() : void {
        console.log("move");
    }

    public jump() : void {
        console.log("jump");
    }
        
}


