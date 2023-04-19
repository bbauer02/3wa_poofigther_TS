import { Character } from "./Character";
import { Playable } from "../interfaces/Playable";

export class Mage extends Character implements Playable {
    constructor(name: string, hp: number, private _mana: number) {
        super(name, hp);
    }

    get mana() {
        return this._mana;
    }

    set mana(rage: number) {
        this._mana = rage;
    }
    
    public attack(target: Character) : void {
        console.log("attack");
    }

    public spell(target: Character) : void {
        console.log("spell");
    }

    public move() : void {
        console.log("move");
    }

    public jump() : void {
        console.log("jump");
    }
        
}


