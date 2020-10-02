export function validateCharacter(character: Character): boolean{
    if(!character.name){
        return false
    }

    if(character.life <= 0 || character.defense <= 0 || character.force <=0){
        return false
    }

    if(character.life === undefined || character.defense === undefined || character.force === undefined){
        return false
    }

    return true
}

export interface Character {
    name: string,
    life: number,
    defense: number,
    force: number
}