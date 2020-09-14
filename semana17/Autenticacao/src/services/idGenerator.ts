import {v4} from 'uuid';

//Classe para gerar um id
export class IdGenerator{
    public generateId(): string{
        const id = v4() 
        return id
    }   
}