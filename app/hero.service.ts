/**
 * Created by ozgur.tuzgen on 31.12.2015.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService{

    getHeroesInstant(){
        return Promise.resolve(HEROES);
    }

    getHeroes() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}