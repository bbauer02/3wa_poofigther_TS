import { ItemQuality } from '../enum/ItemQuality';
import { ItemCategory } from '../enum/ItemCategory';
import { Builder } from '../interfaces/Builder';
import { Item } from './Item';
import { randomBeta  } from 'd3-random';

import { armesGeneriques, armuresTorseGeneriques } from '../datas/itemsNames';

export class ItemBuilder implements Builder {

   
    private item! : Item;

    constructor() {
       this.reset();
    }

    public reset(): void {
        this.item = new Item();
    }

    public addName(name: string): void {
        this.item.name = name;
    }

    public addQuality(itemQuality: ItemQuality): void {
        this.item.quality = itemQuality;
    }

    public addCategory(itemCategory: ItemCategory): void {
        this.item.category = itemCategory;
    }

    public addDropRate(dropRate: number): void {
        this.item.dropRate = dropRate;
    }

    public addBonusDamage(bonusDamage: number): void {
        this.item.bonusDamage = bonusDamage;
    }

    public addBonusHp(bonusHp: number): void {
        this.item.bonusHp = bonusHp;
    }

    public addBonusMana(bonusMana: number): void {
        this.item.bonusMana = bonusMana;
    }

    public addBonusProtection(bonusProtection: number): void {
        this.item.bonusProtection = bonusProtection;
    }

    public addBonusRage(bonusRage: number): void {
        this.item.bonusRage = bonusRage;
    }

    public getItem(): Item {
        return this.item;
    }
    public addRandomName(): void {
        if(this.item.category === ItemCategory.ARMOR) {
            this.addName(armuresTorseGeneriques[Math.floor(Math.random() * armuresTorseGeneriques.length)]);
        } else if(this.item.category === ItemCategory.WEAPON) {
            this.addName(armesGeneriques[Math.floor(Math.random() * armesGeneriques.length)]);
        }
    }

    public addBonusRandom(min: number, max: number) : void {
        // On choisi un nombre aléatoire entre 0 et le nombre de méthodes d'ajout de bonus
        const bonusMethodIndex: number = Math.floor(Math.random() * this.getAddBonusMethods(this).length);
        const addBonusMethod: (this: Builder, value: number) => void = this[this.getAddBonusMethods(this)[bonusMethodIndex] as keyof Builder] as (this: Builder, value: number) => void;     
        // choisir un nombre aléatoire en 1 et 10
        addBonusMethod.call(this, this.getRandomNumber(min, max));
    }

    public addRandomCategory(): void {
        type ItemCategoryKey = keyof typeof ItemCategory;
        const ItemCategorySize = Object.keys(ItemCategory).length;
        const randomItemCategoryIndex = Math.floor(Math.random() * ItemCategorySize);
        const randomItemCategoryKey = Object.keys(ItemCategory)[randomItemCategoryIndex] as ItemCategoryKey;
        this.item.category = ItemCategory[randomItemCategoryKey]; 
    }
    // Methode qui permet de choisir un nombre aleatoire en un minimum et un maximum
    private getRandomNumber( min: number, max: number) : number {
        // aleatoire ALPHA 1 et BETA 3, REPARTITION BETA
        const betaGenerator = randomBeta(1, 2);
        const randomNumber = betaGenerator();
        const range = max - min;
        return Math.ceil(randomNumber * range + min);
    }

    // Cette fonction vérifie si une chaîne de caractères contient "addBonus"
    private isAddBonusMethods(str: string) : boolean {
        return str.includes("addBonus") && !str.includes("addBonusRandom");
    }
    
    // Cette fonction récupère la liste des méthodes d'une classe dont le nom contient "addBonus"
    private getAddBonusMethods(builder: Builder) : string[] {
        const methodsAddBonus: string[] = [];
        for( const propName  of Object.getOwnPropertyNames(Object.getPrototypeOf(builder)) ) {
            const prop = builder[propName as keyof Builder];
            if(typeof prop === "function" && this.isAddBonusMethods(propName)) {
                methodsAddBonus.push(propName);
            }
        }
        return methodsAddBonus;
    }
  
}