/**
 * Created by ozgur.tuzgen on 31.12.2015.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService{

    getHeroes(){
        return heroesPromise;
    }

    getHeroesInstant() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number|string){
        return heroesPromise.then(heroes=> heroes.filter(h=> h.id === +id)[0]);
    }

}

var heroesPromise = Promise.resolve(HEROES);