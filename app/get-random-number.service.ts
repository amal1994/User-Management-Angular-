import {Injectable} from '@angular/core';

@Injectable()

export class RandomNumberService{

    getRandomNumber(){
        let random = Math.floor(Math.random() * 10);
        return random;
    }
    
}