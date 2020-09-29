import { Character, validateCharacter } from "./ex1";

export function performAttack(attacker: Character, defender: Character){
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.force > defender.defense){
        defender.life -= attacker.force - defender.defense
    }
}

export const performAttack1 = (attacker: Character, defender: Character, validator: (character: Character) => boolean) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.force > defender.defense){
        defender.life -= attacker.force - defender.defense
    }
}