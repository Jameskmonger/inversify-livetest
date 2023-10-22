import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

const fight = ninja.fight();
const sneak = ninja.sneak();

console.log(`ninja.fight() => ${fight}`);
console.log(`ninja.sneak() => ${sneak}`);

if (fight !== "cut!") {
    throw new Error("Failing test: ninja.fight() must return 'cut!'");
}

if (sneak !== "hit!") {
    throw new Error("Failing test: ninja.sneak() must return 'hit!'");
}

console.log("All looks good from here!");
