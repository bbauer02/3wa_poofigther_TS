import { Builder } from "../interfaces/Builder";
import { Item } from "./Item";
import { ItemQuality } from "../enum/ItemQuality";
import { ItemCategory } from "../enum/ItemCategory";




export class Director  {

    public makeRandomUncommonItem(builder: Builder): Item {
        builder.reset();

        builder.addQuality(ItemQuality.UNCOMMON);
        builder.addRandomCategory();
        builder.addRandomName();
        builder.addBonusRandom(0,10);
        return builder.getItem();
    }

    public makeRandomRareItem(builder: Builder): Item {
        builder.reset();

        builder.addQuality(ItemQuality.RARE);
        builder.addRandomCategory();
        builder.addRandomName();
        builder.addBonusRandom(10,20);
        builder.addBonusRandom(0,20);
        return builder.getItem();
    }

    public makeRandomEpicItem(builder: Builder): Item {
        builder.reset();

        builder.addQuality(ItemQuality.EPIC);
        builder.addRandomCategory();
        builder.addRandomName();
        builder.addBonusRandom(20,30);
        builder.addBonusRandom(0,20);
        builder.addBonusRandom(0,30);
        return builder.getItem();
    }

    public makeRandomLegendaryItem(builder: Builder): Item {
        builder.reset();

        builder.addQuality(ItemQuality.LEGENDARY);
        builder.addRandomCategory();
        builder.addRandomName();
        builder.addBonusRandom(30,60);
        builder.addBonusRandom(10,30);
        builder.addBonusRandom(15,40);
        builder.addBonusRandom(20,50);
        return builder.getItem();
    }

    public makeRandomArtefacItem(builder: Builder): Item {
        builder.reset();

        builder.addQuality(ItemQuality.ARTIFACT);
        builder.addRandomCategory();
        builder.addRandomName();
        builder.addBonusRandom(50,100);
        builder.addBonusRandom(20,50);
        builder.addBonusRandom(30,50);
        builder.addBonusRandom(40,50);
        return builder.getItem();
    }





}

