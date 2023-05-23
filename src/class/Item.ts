import { ItemCategory } from "../enum/ItemCategory";
import { ItemQuality } from "../enum/ItemQuality";

export class Item {
    constructor(
        private _name?: string | undefined,
        private _dropRate?: number | undefined,
        private _category?: ItemCategory | undefined,
        private _quality?: ItemQuality | undefined,
        private _bonusDamage: number  = 0,
        private _bonusHp: number  = 0,
        private _bonusMana: number = 0 ,
        private _bonusRage: number  = 0,
        private _bonusProtection: number = 0
    ) {

    }
   
    get name() : string | undefined{
        return this._name;
    }

    set name(name: string | undefined) {
        this._name = name;
    }

    get dropRate() : number | undefined {
        return this._dropRate;
    }

    set dropRate(dropRate: number | undefined ) {
        this._dropRate = dropRate;
    }

    get category() : ItemCategory | undefined {
        return this._category;
    }

    set category(category: ItemCategory | undefined) {
        this._category = category;
    }

    get quality() : ItemQuality | undefined {
        return this._quality;
    }

    set quality(quality: ItemQuality | undefined) {
        this._quality = quality;
    }

    get bonusDamage() : number  {
        return this._bonusDamage;
    }

    set bonusDamage(bonusDamage: number) {
        this._bonusDamage = bonusDamage;
    }

    get bonusHp() : number {
        return this._bonusHp;
    }

    set bonusHp(bonusHp: number ) {
        this._bonusHp = bonusHp;
    }

    get bonusMana() : number  {
        return this._bonusMana;
    }

    set bonusMana(bonusMana: number ) {
        this._bonusMana = bonusMana;
    }

    get bonusRage() : number  {
        return this._bonusRage;
    }

    set bonusRage(bonusRage: number ) {
        this._bonusRage = bonusRage;
    }

    get bonusProtection() : number {
        return this._bonusProtection;
    }

    set bonusProtection(bonusProtection: number ) {
        this._bonusProtection = bonusProtection;
    }
}