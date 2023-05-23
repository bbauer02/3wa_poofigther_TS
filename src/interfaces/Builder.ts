import { ItemQuality } from "../enum/ItemQuality";
import { ItemCategory } from "../enum/ItemCategory";
import { Item } from "../class/Item";

export interface Builder {

    reset() : void;
    addName(name: string) : void;
    addQuality(itemQuality: ItemQuality) : void;
    addCategory(itemCategory: ItemCategory) : void;
    addDropRate(dropRate: number) : void;
    addBonusDamage(bonusDamage: number) : void;
    addBonusHp(bonusHp: number) : void;
    addBonusMana(bonusMana: number) : void;
    addBonusProtection(bonusProtection: number) : void;
    addBonusRage(bonusRage: number) : void;
    addBonusRandom(min: number, max: number) : void;
    addRandomName() : void;
    addRandomCategory(): void;
    getItem(): Item;

} 




