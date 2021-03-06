/**
 * Created by ozgur.tuzgen on 25.01.2016.
 */
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform{
    transform(value: string) {
        return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
            return m.toUpperCase();
        });
    }
}