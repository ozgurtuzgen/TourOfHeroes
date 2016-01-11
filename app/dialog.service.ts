/**
 * Created by ozgur.tuzgen on 11.01.2016.
 */
import {Injectable} from "angular2/core";

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable()
export class DialogService{

    confirm(message?: string){
        return new Promise<boolean>((resolve,reject)=> resolve(window.confirm(message || "Is it ok?")));
    }
}
