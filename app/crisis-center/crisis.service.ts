/**
 * Created by ozgur.tuzgen on 08.01.2016.
 */
import {Injectable} from 'angular2/core';
import {CRISISLIST} from './mock-crisisList';

@Injectable()
export class CrisisService{

    getCrisisList(){
        return crisisListPromise;
    }

    getCrisisListInstant() {
        return new Promise<Crisis[]>(resolve =>
            setTimeout(()=>resolve(CRISISLIST), 2000) // 2 seconds
        );
    }

    getCrisis(id: number|string){
        return crisisListPromise.then(heroes=> heroes.filter(h=> h.id === +id)[0]);
    }

}

var crisisListPromise = Promise.resolve(CRISISLIST);