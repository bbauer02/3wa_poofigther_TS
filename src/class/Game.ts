import { ItemBuilder } from './ItemBuilder';
import { Item } from './Item';
import { Director } from './Director';

export class Game {

    private tableLootMod : Item[] = [];
    private tableLootElite : Item[]= [];


    constructor( ) {
        console.log("New Game Created !");
        this.createLootTables();
        console.log("Loot Tables Created !");
    }

    private createLootTables() : void {
        const builder = new ItemBuilder();
        const director = new Director();
        // common
        for(let i=0; i < 1000; i++) {
            this.tableLootMod.push(director.makeRandomUncommonItem(builder));
        }
        for(let i=0; i < 100; i++) {
            this.tableLootMod.push(director.makeRandomRareItem(builder));
        }
        for(let i=0; i < 10; i++) {
            this.tableLootMod.push(director.makeRandomEpicItem(builder));
        }

        // elite
        for(let i=0; i < 1000; i++) {
            this.tableLootElite.push(director.makeRandomRareItem(builder));
        }
        for(let i=0; i < 100; i++) {
            this.tableLootElite.push(director.makeRandomEpicItem(builder));
        }
        for(let i=0; i < 10; i++) {
            this.tableLootElite.push(director.makeRandomLegendaryItem(builder));
        }
        for(let i=0; i < 3; i++) {
            this.tableLootElite.push(director.makeRandomArtefacItem(builder));
        }
    }





}