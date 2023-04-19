export abstract class Character {

    // Constructor
    constructor(private _name:string, private _hp:number) {

    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }

    get hp() {
        return this._hp;
    }

    set hp(hp:number) {
        this._hp = hp;
    }

    // Methods
    public abstract attack( target : Character ) : void;

    /**
     * IsAlive
     * Method to check if the character is alive or not
     * @returns true if the character is alive, false otherwise
     */
    public isAlive() : boolean {
        return this._hp > 0;
    }

    /**
     * Die
     * Method to say that the character is dead
     * @returns void
     */

    public die() : void {
        console.log(`${this._name} is dead`);
    }

    /**
     * GetHurted
     * Method to get hurted by an amount of damage
     * @param damage the amount of damage
     * @returns void
    */
    public getHurt(damage:number) : void {
        this._hp -= damage;
        if (this._hp <= 0) {
            this.die();
        }
    }

}

